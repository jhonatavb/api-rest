const express = require('express');

const pseudoDatabase = require('./pseudoDatabase');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get('/products', (req, res, _next) => {
  res.send(pseudoDatabase.getProducts());
});

app.get('/products/:id', (req, res, _next) => {
  res.send(pseudoDatabase.getProduct(req.params.id));
});

app.post('/products', (req, res, _next) => {
  const product = pseudoDatabase.saveProduct({
    name: req.body.name,
    price: req.body.price
  });

  res.send(product);
});

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
