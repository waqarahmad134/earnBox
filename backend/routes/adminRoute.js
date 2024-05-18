const express = require('express');
const router = express();
const authController = require('../controllers/adminController');
const validateToken = require('../middlewares/accessCheck')
const catchAsync = require('../middlewares/catchAync');


// ! Module 1:  Auth
router.post('/addPaymentMethod', catchAsync(authController.addPaymentMethod));
router.post('/updatePaymentMethod', catchAsync(authController.updatePaymentMethod));


module.exports = router;