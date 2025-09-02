const express = require("express");
const router = express.Router();
const Manufacturer=require("../models/Manufacter");

router.post("/", async (req, res) => {
  try {
    const manufacturer = new Manufacturer(req.body);
    await manufacturer.save();
    res.status(201).json(manufacturer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
