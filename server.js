require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send(`Hello from Node.js running on AWS EC2! 🚀`);
});

// Environment Variables Test Route
app.get("/env", (req, res) => {
  res.json({
    message: "Environment variables loaded successfully!",
    app_env: process.env.APP_ENV || "development",
    secret_key: process.env.SECRET_KEY || "default-secret"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});