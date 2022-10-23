const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const categories = require("./Data/category.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("News Portal API Running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`News Portal Server is running on port: ${port}`);
});
