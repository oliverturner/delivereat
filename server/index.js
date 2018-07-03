const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const menu = require("../data/menu.json");
const storage = require("./storage.js")({ menu });

const app = express();

app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "static")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", function(req, res) {
  res.render("index", { menu: storage.getMenu() });
});

app.get("/api/menu", function(req, res) {
  res.json(menu);
});

app.get("/api/orders", function(req, res) {
  res.json(menu);
});

app.listen(8080, function() {
  console.log("Server is running at http://localhost:8080");
});
