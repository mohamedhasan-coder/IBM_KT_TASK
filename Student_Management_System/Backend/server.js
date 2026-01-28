const express = require("express");
const cors = require("cors");
const studentRoutes = require("./studentRoutes");

const app = express();

// MiddleWare
app.use(cors());              // FIX CORS
app.use(express.json());      // Parse JSON

// ROUTES
app.use("/api", studentRoutes);

// SERVER
app.listen(5000, () => {
  console.log("Student Server running on port 5000");
});
