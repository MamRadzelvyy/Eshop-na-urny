const Poptavka = require("../models/poptavka");

exports.submitPoptavka = async (req, res) => {
  try {
    const newPoptavka = new Poptavka(req.body);
    await newPoptavka.save();
    res.status(201).json({ message: "Poptávka byla úspěšně odeslána!" });
  } catch (error) {
    res.status(500).json({ error: "Chyba při odesílání Poptávky" });
  }
};

exports.getPoptavkas = async (req, res) => {
  try {
    const poptavkas = await Poptavka.find().sort({ createdAt: -1 });
    console.log("Načtené poptávky:", poptavkas);
    res.json(poptavkas);
  } catch (error) {
    res.status(500).json({ error: "Chyba při načítání poptavávek" });
    console.error("Chyba při načítání poptávek:", error);
  }
};

exports.deletePoptavka = async (req, res) => {
  try {
    const result = await Poptavka.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Poptavka deleted",
      });
    }
    res.status(500).send({ msg: "Něco se pokazilo" });
  } catch (error) {
    res.status(500).send(error);
  }
};
