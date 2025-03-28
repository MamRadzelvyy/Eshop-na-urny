const express = require('express');
require('dotenv').config();
const router = express.Router();
const Stripe = require('stripe');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');
const { authMiddleware } = require('../middleware/authMiddleware'); // <- Přidej, pokud chráníš endpoint

router.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'czk',
      product_data: {
        name: item.name,
        images: [],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Něco se pokazilo při vytváření platby' });
  }
});

router.get('/session-details', async (req, res) => {
  const { session_id } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    res.json({
      email: session.customer_details.email,
      amount: session.amount_total / 100,
      orderId: session.id,
    });
  } catch (error) {
    console.error("Chyba při získávání session:", error);
    res.status(500).json({ error: "Nepodařilo se načíst údaje o platbě." });
  }
});

// 💾 Uloží objednávku do databáze (zabrání duplikaci podle stripeOrderId)
router.post('/save-order', authMiddleware, async (req, res) => {
  const { userId, products, totalPrice, orderId } = req.body;

  console.log("🔁 Backend obdržel:", { userId, products, totalPrice, orderId });

  try {
    if (!orderId) {
      return res.status(400).json({ msg: "Chybí orderId (stripeOrderId)." });
    }

    // ✅ Kontrola, zda objednávka už existuje
    const existingOrder = await Order.findOne({ stripeOrderId: orderId });
    if (existingOrder) {
      return res.status(200).json({ msg: "Objednávka už existuje", order: existingOrder });
    }

    const formattedProducts = products.map(item => ({
      productId: item._id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      imagePath: item.imagePath,
    }));

    const newOrder = await Order.create({
      user: userId,
      products: formattedProducts,
      totalPrice,
      stripeOrderId: orderId,
    });

    console.log("✅ Objednávka uložena do DB:", newOrder._id);
    res.status(201).json({ msg: "Objednávka úspěšně uložena!", order: newOrder });
  } catch (error) {
    console.error("❌ Backend chyba při ukládání:", error.message);
    res.status(500).json({ error: "Chyba při ukládání objednávky." });
  }
});

module.exports = router;
