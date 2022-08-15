const express = require('express');
require('dotenv').config();

const auth = (req, res, next) => {
  if(!req.headers.username && !req.headers.password) {
    return res.status(401).send({ message: 'unauthorized user for this operation.' });
  }

  if(req.headers.username !== process.env.DB_USERNAME || req.headers.password !== process.env.DB_PASSWORD) {
    return res.status(401).send({ message: 'username or password is invalid.' });
  }

  next();
};

module.exports = auth;
