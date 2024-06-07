const express = require('express');
const router = express();
const authController = require('../controllers/authController');
const validateToken = require('../middlewares/accessCheck')
const catchAsync = require('../middlewares/catchAync');


// ! Module 1:  Auth
router.post('/signin', catchAsync(authController.signIn));
router.post('/signup', catchAsync(authController.signup));
router.post('/resendOTP', catchAsync(authController.resendOTP));
router.post('/verifyOTP', catchAsync(authController.verifyOTP));
router.post('/forgotPassword', catchAsync(authController.forgotPassword));
router.patch('/verifyPasswordOtp', catchAsync(authController.verifyPasswordOtp));

router.use(validateToken);
router.patch('/resetPassword', catchAsync(authController.resetPassword));
router.patch('/updatePassword',catchAsync( authController.updatePassword));
router.get('/getPaymentMethods',catchAsync( authController.getPaymentMethods));
// ! Module 2: Agent Dashboard
// 1.  Get 
//router.get('/agentDashboard', validateToken, checkPermission,  asyncMiddleware(adminController.getAllCustomers)) 

module.exports = router;