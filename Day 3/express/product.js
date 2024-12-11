const express = require("express");
const app = express();

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/products", (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 999 },
    { id: 2, name: "Shirt", category: "clothing", price: 29 },
    { id: 3, name: "Smartphone", category: "electronics", price: 799 },
    { id: 4, name: "Coffee Maker", category: "home appliances", price: 99 },
  ];

  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }
  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseInt(minPrice)
    );
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseInt(maxPrice)
    );
  }

  res.json(filteredProducts);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
