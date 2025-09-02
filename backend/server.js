require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const categoryRoutes = require("./routes/categoryRoutes");
const manufacturerRoutes = require("./routes/manufacturerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/manufacturers", manufacturerRoutes);

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));