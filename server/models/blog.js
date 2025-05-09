const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  content: { type: String, required: true },
  theme: {
    type: String,
    enum: ["Pohřeb a jeho zařízení", "Výběr urny a péče","Úmrtí zvířete","Kremace a způsoby pohřbu","Události a zajímavosti","Úmrtí a právní záležitosti", "test"],
    default: "pohreb",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", BlogSchema);
