const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config(); // Načtení .env souboru

const isAdmin = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) {
      return res.status(401).json({ msg: "Přístup zamítnut. Chybí token." });
    }

    // Ověření tokenu
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ msg: "Neplatný token." });
    }

    // Najdeme uživatele podle ID z tokenu
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ msg: "Uživatel neexistuje." });
    }

    // Ověření, zda je uživatel admin
    if (user.name !== "admin" && !user.isAdmin) {
      return res.status(403).json({ msg: "Přístup zamítnut. Nejste administrátor." });
    }

    req.user = user; // Přidáme uživatele do requestu
    next();
  } catch (error) {
    console.error("Chyba v isAdmin middleware:", error.message);
    res.status(500).json({ msg: "Chyba serveru.", error: error.message });
  }
};

module.exports = isAdmin;
