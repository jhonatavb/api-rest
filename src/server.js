const express = require('express');
require('dotenv').config();

const productsRoutes = require('./routes/productsRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

PORT = process.env.API_PORT;

app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
