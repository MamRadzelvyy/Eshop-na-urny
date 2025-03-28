const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token = req.header("x-auth-token");

  console.log("🔐 Přijatý token:", token); // Přidáno

  if (!token) {
    console.warn("❗ Token chybí v hlavičce");
    return res.status(401).json({ msg: "Přístup zamítnut. Chybí token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token ověřen:", decoded); // Přidáno

    req.user = { userId: decoded.userId };

    const user = await User.findById(decoded.userId);
    if (!user) {
      console.warn("❗ Uživatel nenalezen v DB");
      return res.status(404).json({ msg: "Uživatel nenalezen." });
    }

    next();
  } catch (err) {
    console.error("❌ Neplatný token:", err.message);
    res.status(401).json({ msg: "Neplatný token." });
  }
};

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ msg: "Přístup zamítnut. Nemáte oprávnění." });
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: "Chyba serveru." });
  }
};

module.exports = { authMiddleware, adminMiddleware };
