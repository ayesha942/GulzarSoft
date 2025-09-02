const express = require("express");
const router = express.Router();
const Category=require("../models/Category");

router.post("/", async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().populate("manufacturers");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
