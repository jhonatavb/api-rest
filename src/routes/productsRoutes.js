const express = require('express');

const {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  delProduct,
} = require("../controllers/productsController");
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', auth, createProduct);
router.put('/:id', auth, editProduct);
router.delete('/:id', auth, delProduct);

module.exports = router;
