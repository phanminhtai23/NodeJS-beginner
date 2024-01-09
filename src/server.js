const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');
require('dotenv').config();

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static file
app.use(express.static(path.join(__dirname, 'public')))

// khai báo route
app.get('/', function (req, res) {
  res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`http://${hostname}:${port}/`);
})