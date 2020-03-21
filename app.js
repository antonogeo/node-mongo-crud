const express = require('express');
const accounts = require('./routes/AccountRouter');
const dbProperties = require('./config/db');
const mongoose = require('mongoose');

const app = express();

app.use('/accounts', accounts);

mongoose.connect(dbProperties.url, { useNewUrlParser: true });

app.use((req, res, next) =>{
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) =>{
  res.status(error.status || 500);
  res.json({
    error:{
      message : error.message
    }
  })
})

module.exports = app;
