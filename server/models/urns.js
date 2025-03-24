const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  imagePath: { type: String, required: true },
  description: { type: String, required: true },

  for: {
    type: String,
    enum: ["Lidská", "Zvířecí", "test"],
    default: "Lidská",
    required: true
  },

  top: {
    type: String,
    enum: ["TOP", "test", "normální"],
    default: "normální",
    required: true
  },

  material: {
    type: String,
    enum: [
      "Ekologické urny",
      "Kovové urny",
      "Keramické urny",
      "Kamenné urny",
      "Betonové urny",
      "Dřevěné urny",

      "Zvířecí urny S",
      "Zvířecí urny M",
      "Zvířecí urny L",

      "test",
    ],
    default: "test",
    required: true
  },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Urn", schema);
