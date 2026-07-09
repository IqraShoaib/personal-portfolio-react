const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.get("/api/profile", (req, res) => {
  res.json(data.profile);
});

app.get("/api/skills", (req, res) => {
  res.json(data.skills);
});

app.get("/api/projects", (req, res) => {
  res.json(data.projects);
});

app.get("/api/contact", (req, res) => {
  res.json(data.contact);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});