const Urn = require("../models/urns");

exports.getAllUrns = async (req, res) => {
  try {
    const result = await Urn.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Urns found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Urns not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUrnById = async (req, res) => {
  try {
    const result = await Urn.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Urn found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Urn not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUrn = async (req, res) => {
  try {
    const result = await Urn.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Urn deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUrn = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      price: req.body.price,
      color: req.body.color,
      imagePath: req.body.imagePath,
      description: req.body.description,
      for: req.body.for,
      top: req.body.top,
      material: req.body.material,
    };
    const result = await Urn.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Urn updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Urn was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createUrn = async (req, res) => {
  try {
    const data = new Urn({
      name: req.body.name,
      price: req.body.price,
      color: req.body.color,
      imagePath: req.body.imagePath,
      description: req.body.description,
      for: req.body.for,
      top: req.body.top,
      material: req.body.material,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Urn created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Urn was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
