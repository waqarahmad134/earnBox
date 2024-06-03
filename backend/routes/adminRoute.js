const express = require('express');
const router = express();
const authController = require('../controllers/adminController');
const validateToken = require('../middlewares/accessCheck')
const catchAsync = require('../middlewares/catchAync');


// ! Module 2:  Packages

router.get('/getPackages', catchAsync(authController.getPackages));
router.post('/addPackage', catchAsync(authController.addPackage));

// ! Module 2:  Payment
router.post('/addPaymentMethod', catchAsync(authController.addPaymentMethod));
router.post('/updatePaymentMethod', catchAsync(authController.updatePaymentMethod));



module.exports = router;