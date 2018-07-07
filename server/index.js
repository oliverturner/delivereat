const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const rawMenu = require("../data/menu.json");
const storage = require("./storage.js")({ rawMenu });

const app = express();
const isProd = process.env.NODE_ENV === "production";

app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "static")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
hbs.registerPartials(__dirname + "/views/partials");

//  Pages
//------------------------------------------------------------------------------
app.get("/", function(req, res) {
  res.render("index", {
    isProd,
    menu: storage.getMenu()
  });
});

//  API
//------------------------------------------------------------------------------
//  Menu
//---------------------------------------
app.get("/api/menu", function(req, res) {
  res.json(storage.getMenu());
});

app.get("/api/menu/:id", function(req, res) {
  const item = storage.readMenuItem(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: "Not found" });
});

app.post("/api/menu", function(req, res) {
  const item = storage.createMenuItem(req.body);
  res.status(201).json(item);
});

app.patch("/api/menu/:id", function(req, res) {
  const item = storage.updateMenuItem(req.params.id, req.body);
  item ? res.json(item) : res.status(404).json({ error: "Not found" });
});

app.delete("/api/menu/:id", function(req, res) {
  const item = storage.deleteMenuItem(req.params.id, req.body);
  item
    ? res.status(204).json(item)
    : res.status(404).json({ error: "Not found" });
});

//  Orders
//---------------------------------------
app.get("/api/orders", function(req, res) {
  res.json(storage.getOrders());
});

app.get("/api/orders/:id", function(req, res) {
  res.json(storage.readOrder(req.params.id));
});

app.post("/api/orders", function(req, res) {
  const item = storage.createOrder(req.body);
  res.status(201).json(item);
});

app.patch("/api/orders/:id", function(req, res) {
  const newItem = storage.updateOrder(req.params.id, req.body);
  res.json(newItem);
});

app.delete("/api/orders/:id", function(req, res) {
  const newItem = storage.deleteOrder(req.params.id, req.body);
  res.status(204).json(newItem);
});

//  Start server
//------------------------------------------------------------------------------
app.listen(8080, function() {
  console.log("Server is running at http://localhost:8080");
});
