const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Registrace uživatele
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Kontrola, zda uživatel již existuje
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "Uživatel již existuje." });
    }

    // Hashování hesla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Vytvoření nového uživatele
    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ msg: "Registrace úspěšná!" });
  } catch (err) {
    res.status(500).json({ msg: "Chyba serveru." });
  }
};

// Přihlášení uživatele
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Najít uživatele podle emailu
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Neplatný e-mail nebo heslo." });
    }

    // Ověření hesla
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Neplatný e-mail nebo heslo." });
    }

    // Vytvoření JWT tokenu
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin, }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, msg: "Přihlášení úspěšné!" });
  } catch (err) {
    res.status(500).json({ msg: "Chyba serveru." });
  }
};
