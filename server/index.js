const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const storage = require("./storage.js")({ 
  products: require("../data/products.json")
});

const app = express();
const isProd = process.env.NODE_ENV === "production";

app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "static")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
hbs.registerPartials(__dirname + "/views/partials");

//  Pages
//------------------------------------------------------------------------------
function renderHome(req, res) {
  res.render("index", {
    isProd,
    products: storage.getProducts()
  });
}

app.get("/", renderHome);

//  API
//------------------------------------------------------------------------------
//  Products
//---------------------------------------
app.get("/api/products", function(req, res) {
  res.json(storage.getProducts());
});

app.get("/api/products/:id", function(req, res) {
  const item = storage.readProduct(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: "Not found" });
});

app.post("/api/products", function(req, res) {
  const item = storage.createProduct(req.body);
  res.status(201).json(item);
});

app.patch("/api/products/:id", function(req, res) {
  const item = storage.updateProduct(req.params.id, req.body);
  item ? res.json(item) : res.status(404).json({ error: "Not found" });
});

app.delete("/api/products/:id", function(req, res) {
  const item = storage.deleteProduct(req.params.id, req.body);
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

//  Wildcard
//---------------------------------------
app.get("*", renderHome);

//  Start server
//------------------------------------------------------------------------------
app.listen(8080, function() {
  console.log("Server is running at http://localhost:8080");
});
