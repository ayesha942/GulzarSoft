const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const Manufacter = require("../models/Manufacter");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    const manufacturers = await Manufacter.find();
    
    const result = categories.map(cat => ({
      _id: cat._id,
      name: cat.name,
      img: cat.img,
      link: cat.link,
      manufacturers: manufacturers.filter(m => m.category.toString() === cat._id.toString())
    }));
    
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;