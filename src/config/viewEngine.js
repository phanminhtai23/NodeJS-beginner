// giống import
const path = require('path');
const express = require('express');

// các cấu hình tách từ file chính
const configViewEngine = (app) => {
    // config template engine
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    // config static file
    app.use(express.static(path.join(__dirname, '../public')))
}

// để dùng bên server.js cần phải export
module.exports = configViewEngine;