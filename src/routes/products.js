const express = require('express');
const { StatusCodes } = require('http-status-codes');

const { 
  saveProduct,
  getProducts,
  getProduct,
  deleteProduct 
} = require('../db/pseudoDatabase');

const router = express.Router();

router.get('/', (req, res, _next) => {
  try {
    const products = getProducts() 
    return res.status(StatusCodes.OK).send(products);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
});

router.get('/:id', (req, res, _next) => {
  try {
    const productId = getProduct(req.params.id);
    if(!productId) return res.send(StatusCodes.NOT_FOUND).end();
    return res.status(StatusCodes.OK).send(productId);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
});

router.post('/', (req, res, _next) => {
  try {
    const product = saveProduct({
      name: req.body.name,
      price: req.body.price
    });

    return res.status(StatusCodes.CREATED).send(product);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
});

router.put('/:id', (req, res, _next) => {
  try {
    const product = saveProduct({
      name: req.body.name,
      price: req.body.price,
      id: req.params.id
    });

    return res.status(StatusCodes.OK).send(product);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
});

router.delete('/:id', (req, res, _next) => {
  try {
    const product = deleteProduct(req.params.id);
    return res.status(StatusCodes.OK).send(product);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
});

module.exports = router;
