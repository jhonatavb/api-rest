const express = require('express');

const pseudoDatabase = require('../db/pseudoDatabase');

const router = express.Router();

router.get('/', (req, res, _next) => {
  res.send(pseudoDatabase.getProducts());
});

router.get('/:id', (req, res, _next) => {
  res.send(pseudoDatabase.getProduct(req.params.id));
});

router.post('/', (req, res, _next) => {
  const product = pseudoDatabase.saveProduct({
    name: req.body.name,
    price: req.body.price
  });

  res.send(product);
});

router.put('/:id', (req, res, _next) => {
  const product = pseudoDatabase.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  });

  res.send(product);
});

router.delete('/:id', (req, res, _next) => {
  const product = pseudoDatabase.deleteProduct(req.params.id);
  res.send(product);
});

module.exports = router;