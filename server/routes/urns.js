var express = require("express");
var router = express.Router();

const urnsController = require("../controllers/urns");

router.get("/", urnsController.getAllUrns);

router.get("/:id", urnsController.getUrnById);

router.delete("/:id", urnsController.deleteUrn);

router.put("/:id", urnsController.updateUrn);

router.post("/", urnsController.createUrn);

module.exports = router;
