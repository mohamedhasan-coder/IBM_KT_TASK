const express = require("express");
const app = express();
const studentRoutes = require("./studentRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api", studentRoutes);

// Server
app.listen(5000, () => {
    console.log("Student Server running on port 5000");
});


