const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const Manufacter = require("../models/Manufacter");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().lean();
    
    for (let cat of categories) {
      cat.manufacturers = await Manufacter.find({ category: cat._id }).lean();
    }
    
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;