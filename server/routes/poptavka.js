const express = require("express");
const router = express.Router();
const { submitPoptavka, getPoptavkas, deletePoptavka } = require("../controllers/poptavka");

router.post("/", submitPoptavka);
router.get("/", getPoptavkas);
router.delete("/:id", deletePoptavka);

module.exports = router;
