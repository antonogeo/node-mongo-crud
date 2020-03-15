const express = require('express');
const app = express();

const dbProperties = require('./config/db');

const mongoose = require('mongoose');
mongoose.connect(dbProperties.url, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

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
