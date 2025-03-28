const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { authMiddleware } = require("../middleware/authMiddleware");
const bcrypt = require('bcryptjs');

// ⬇️ přidej tyto endpointy (ideálně na konec souboru):

// Přidání/Odebrání oblíbené urny
router.put('/favourites/:id', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user) return res.status(404).json({ msg: 'Uživatel nenalezen' });

  const urnId = req.params.id;

  if (!user.favourites.includes(urnId)) {
    user.favourites.push(urnId);
  } else {
    user.favourites = user.favourites.filter(id => id.toString() !== urnId);
  }

  await user.save();
  res.json(user.favourites);
});

// Získání oblíbených uren uživatele
router.get('/favourites', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.userId).populate('favourites');
  if (!user) return res.status(404).json({ msg: 'Uživatel nenalezen' });

  res.json(user.favourites);
});

// aktualizace profilu uživatele
router.put('/profile/:id', authMiddleware, async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findById(req.params.id);
  
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      if (password) user.password = await bcrypt.hash(password, 10);
  
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ msg: 'Uživatel nenalezen' });
    }
  });

  // GET /api/users/:id
router.get('/:id', authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password');
      if (!user) {
        return res.status(404).json({ msg: 'Uživatel nenalezen' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Chyba serveru' });
    }
  });
  
module.exports = router;
