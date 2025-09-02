const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  link: { type: String, required: true }
});


categorySchema.virtual("manufacturers", {
  ref: "Manufacter",           
  localField: "_id",           
  foreignField: "category",   
});

categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
module.exports = Category;
