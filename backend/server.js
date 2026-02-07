const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");

const app = express();

// 🔥 Allow ALL origins temporarily (development fix)
app.use(cors());

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Correct route base
app.use("/api/blogs", blogRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
