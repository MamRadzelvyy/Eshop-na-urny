require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const ADMIN_SECRET = process.env.ADMIN_SECRET;
const JWT_SECRET = process.env.JWT_SECRET || "tajnyklic"; // Použij bezpečný klíč!

// Endpoint pro přihlášení (generování tokenu)
router.post("/", (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ success: false, message: "Heslo je povinné" });
    }

    if (password === ADMIN_SECRET) {
        // Vytvoření JWT tokenu s expirací 5 minut
        const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1m" });
        return res.json({ success: true, token });
    } else {
        return res.status(401).json({ success: false, message: "Špatné heslo" });
    }
});

// Middleware pro ověřování tokenu
const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ success: false, message: "Přístup zamítnut – token chybí" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Neplatný nebo expirovaný token" });
        }
        req.user = decoded;
        next();
    });
};

// Chráníme admin API
router.get("/protected", verifyToken, (req, res) => {
    res.json({ success: true, message: "Máte přístup!", user: req.user });
});

// Endpoint pro odhlášení (smazání tokenu na frontend)
router.post("/logout", (req, res) => {
    return res.json({ success: true, message: "Úspěšně odhlášen" });
});

module.exports = router;
