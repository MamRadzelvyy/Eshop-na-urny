const express = require("express");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

// Chráněná administrátorská cesta
router.get("/adminpanel", isAdmin, (req, res) => {
  res.json({ msg: "Vítejte v admin panelu!", user: req.user });
});

module.exports = router;
