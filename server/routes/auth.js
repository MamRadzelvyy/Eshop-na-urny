const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware");


const router = express.Router();

// Registrace uživatele
router.post("/register", registerUser);

// Přihlášení uživatele
router.post("/login", loginUser);

router.get("/verify", authMiddleware, (req, res) => {
  res.status(200).json({ valid: true });
});


module.exports = router;
