const express = require("express");
const router = express.Router();
const Manufacter = require("../models/Manufacter");

router.post("/", async (req, res) => {
  try {
    const manufacter = new Manufacter(req.body);
    await manufacter.save();
    res.status(201).json(manufacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const manufacters = await Manufacter.find().populate("category"); 
    res.json(manufacters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
