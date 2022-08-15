const express = require('express');

const auth = (req, res, next) => {
  if(!req.headers.username && !req.headers.password) {
    return res.status(401).send({ message: 'unauthorized user for this operation.' });
  }

  if(req.headers.username !== 'admin' || req.headers.password !== 'admin') {
    return res.status(401).send({ message: 'username or password is invalid.' });
  }

  next();
};

module.exports = auth;
