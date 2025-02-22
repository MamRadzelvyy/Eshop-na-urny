const Blog = require("../models/blog");

exports.getAllBlogs = async (req, res) => {
  const { theme } = req.query;
  var query = {};
  if (theme) query.theme = theme;

  try {
    const result = await Blog.find(query);
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Blogs found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Blogs not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getNewestBlogs = async (req, res) => {
  try {
    const result = await Blog.find().limit(6).sort({ createdAt: -1 });
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Blogs found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Blogs not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const result = await Blog.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Blog found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Blog not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const result = await Blog.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Blog deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const data = {
      heading: req.body.heading,
      description: req.body.description,
      imagePath: req.body.imagePath,
      content: req.body.content,
      theme: req.body.theme,
    };
    const result = await Blog.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Blog updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Blog was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createBlog = async (req, res) => {
  try {
    const data = new Blog({
      heading: req.body.heading,
      description: req.body.description,
      imagePath: req.body.imagePath,
      content: req.body.content,
      theme: req.body.theme,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Blog created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Blog was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
