require('dotenv').config();
const express = require('express');
const app = express();
// const pug = require('pug');

// chia nhỏ file ra phải import
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);
app.use('/v1', webRoutes); // tạo sự khác biệt giữa các routes, thêm /v2 trước route trong path

app.listen(port, () => {
  console.log(`http://${hostname}:${port}/`);
})