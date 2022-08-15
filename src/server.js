const express = require('express');

const app = express();

const PORT = 3000;

app.get('/produtos', (req, res, next) => {
  res.send({ nome: 'MacBook PRO M1', preco: 2000.00 });
});

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});