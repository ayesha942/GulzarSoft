const mongoose = require("mongoose");

const manufacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Manufacter", manufacterSchema); 
