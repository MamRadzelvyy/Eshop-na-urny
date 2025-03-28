const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Urn', required: true },
      name: String,
      quantity: Number,
      price: Number,
      imagePath: String,
    }
  ],
  totalPrice: { type: Number, required: true },

  // 👇 stripeOrderId bude sloužit jako jedinečný identifikátor objednávky
  stripeOrderId: { type: String, unique: true, required: true },

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
