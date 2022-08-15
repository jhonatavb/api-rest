const express = require('express');

const productsRoutes = require('./routes/productsRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const PORT = 3000;

app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
