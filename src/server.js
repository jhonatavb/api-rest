const express = require('express');

const products = require('./routes/products');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

const PORT = 3000;

app.use('/products', products);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
