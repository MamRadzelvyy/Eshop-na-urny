var express = require("express");
var router = express.Router();

const catsController = require("../controllers/cats");

router.get("/", catsController.getAllCats);

router.get("/:id", catsController.getCatById);

router.delete("/:id", catsController.deleteCat);

router.put("/:id", catsController.updateCat);

router.post("/", catsController.createCat);

module.exports = router;
