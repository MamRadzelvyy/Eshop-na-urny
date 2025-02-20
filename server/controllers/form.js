const Form = require("../models/form");

exports.submitForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: "Formulář byl úspěšně odeslán!" });
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
      return res.status(200).send({
        msg: "Form deleted",
      });
    }
    res.status(500).send({ msg: "Něco se pokazilo" });
  } catch (error) {
    res.status(500).send(error);
  }
};
