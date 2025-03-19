const Form = require("../models/form");

exports.submitForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();

    // Získáme Socket.io objekt ze serveru
    const io = req.app.get("socketio");

    // Pošleme událost "newForm" všem připojeným klientům (admin panel)
    io.emit("newForm", newForm);

    res.status(201).json({ message: "Formulář byl úspěšně odeslán!", form: newForm });
  } catch (error) {
    res.status(500).json({ error: "Chyba při odesílání formuláře" });
  }
};

exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: "Chyba při načítání formulářů" });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const result = await Form.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({ msg: "Formulář byl úspěšně smazán" });
    }
    res.status(500).send({ msg: "Něco se pokazilo" });
  } catch (error) {
    res.status(500).send(error);
  }
};
