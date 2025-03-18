require("dotenv").config();
const express = require("express");
const router = express.Router();

// Načtení hesla z .env souboru
const ADMIN_SECRET = process.env.ADMIN_SECRET;

// Endpoint pro ověření hesla
router.post("/", (req, res) => {
    const { password } = req.body;

    if (password === ADMIN_SECRET) {
        res.json({ success: true, message: "Přístup povolen" });
    } else {
        res.status(401).json({ success: false, message: "Špatné heslo" });
    }
});

module.exports = router;
