const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Přístup zamítnut. Chybí token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;

    // Najdeme uživatele v databázi
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ msg: "Uživatel nenalezen." });
    }

    next();
  } catch (err) {
    res.status(401).json({ msg: "Neplatný token." });
  }
};

// Middleware pro ověření admin práv
const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ msg: "Přístup zamítnut. Nemáte oprávnění." });
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: "Chyba serveru." });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };