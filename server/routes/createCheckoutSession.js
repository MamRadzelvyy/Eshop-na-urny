const express = require('express');
require('dotenv').config();
const router = express.Router();
const Stripe = require('stripe');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'czk',
      product_data: {
        name: item.name,
        images: [],
      },
      unit_amount: item.price * 100, // ceny v haléřích
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
      amount: session.amount_total / 100, // převod z haléřů
      orderId: session.id,
    });
  } catch (error) {
    console.error("Chyba při získávání session:", error);
    res.status(500).json({ error: "Nepodařilo se načíst údaje o platbě." });
  }
});


module.exports = router;
