const mongoose = require("mongoose");

const PoptavkaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    telnumber: { type: String, required: true },
    message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Poptavka", PoptavkaSchema);
