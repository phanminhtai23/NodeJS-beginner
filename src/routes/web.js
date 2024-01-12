// viết API cho server side rendering, chức nawbg ,method

const express = require('express');
const router = express.Router();
// khai báo hanler từ controller
const { getHomepage, getABC }  = require('../controllers/homeController');

// router.Method('/route', handler); // định nghĩa rout,controler

// khai báo route, router thay cho app (express)
router.get('/', getHomepage);
router.get('/abc', getABC);


module.exports = router; //export default