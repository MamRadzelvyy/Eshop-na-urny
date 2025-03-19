const Poptavka = require("../models/poptavka");

exports.submitPoptavka = async (req, res) => {
  try {
    const newPoptavka = new Poptavka(req.body);
    await newPoptavka.save();

    // Získáme Socket.io objekt ze serveru
    const io = req.app.get("socketio");

    // Pošleme událost "newPoptavka" všem připojeným klientům (admin panel)
    io.emit("newPoptavka", newPoptavka);

    res.status(201).json({ message: "Poptávka byla úspěšně odeslána!", poptavka: newPoptavka });
  } catch (error) {
    res.status(500).json({ error: "Chyba při odesílání poptávky" });
  }
};

exports.getPoptavkas = async (req, res) => {
  try {
    const poptavkas = await Poptavka.find().sort({ createdAt: -1 });
    res.json(poptavkas);
  } catch (error) {
    res.status(500).json({ error: "Chyba při načítání poptávek" });
  }
};

exports.deletePoptavka = async (req, res) => {
  try {
    const result = await Poptavka.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({ msg: "Poptávka byla úspěšně smazána" });
    }
    res.status(500).send({ msg: "Něco se pokazilo" });
  } catch (error) {
    res.status(500).send(error);
  }
};
