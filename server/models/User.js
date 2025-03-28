const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }, // Přidáno pole pro roli admina

  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Urn' }], // Přidáno pole pro oblíbené urny
  
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
