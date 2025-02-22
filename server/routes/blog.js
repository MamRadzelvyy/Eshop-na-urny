var express = require("express");
var router = express.Router();

const blogController = require("../controllers/blog");

router.get("/newest", blogController.getNewestBlogs);

router.get("/", blogController.getAllBlogs);

router.get("/:id", blogController.getBlogById);

router.delete("/:id", blogController.deleteBlog);

router.put("/:id", blogController.updateBlog);

router.post("/", blogController.createBlog);

module.exports = router;
