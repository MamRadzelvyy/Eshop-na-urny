const express = require("express");
const router = express.Router();
const { submitForm, getForms, deleteForm } = require("../controllers/form");

router.post("/", submitForm);
router.get("/", getForms);
router.delete("/:id", deleteForm);

module.exports = router;
