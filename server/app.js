const express = require('express'); 
const router = require('./routes/router');
const path = require('path');


const app = express();

app.use(express.json());
app.set('view engine', 'js');

app.get("/", (req, res) => {
  res.status(200);
});

module.exports = app;