const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { authMiddleware } = require("../middleware/authMiddleware");

// Získání objednávek uživatele podle jeho ID
router.get('/user/:userId', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('products');
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Chyba serveru" });
  }
});

module.exports = router;
