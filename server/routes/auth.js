const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

// Registrace uživatele
router.post("/register", registerUser);

// Přihlášení uživatele
router.post("/login", loginUser);

module.exports = router;
