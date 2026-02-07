const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// CREATE
router.post("/", async (req, res) => {
  const blog = new Blog(req.body);
  const savedBlog = await blog.save();
  res.json(savedBlog);
});

// READ ALL
router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
