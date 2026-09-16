const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "blue-v1";

app.get("/", (req, res) => {
  res.json({
    message: "AWS DevSecOps Blue-Green GitOps Project",
    version: APP_VERSION
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    version: APP_VERSION
  });
});

app.get("/ready", (req, res) => {
  res.status(200).json({
    status: "ready",
    version: APP_VERSION
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
