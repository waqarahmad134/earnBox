const express = require('express');
const router = express();
const adminController = require('../controllers/adminController');
const validateToken = require('../middlewares/accessCheck')
const catchAsync = require('../middlewares/catchAync');
const multer = require('multer');
const path = require('path');

const uploadimage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./Public/packages`);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname +
          "-" +
          Math.floor(Math.random() * 1000000000) +
          "-" +
          path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({
    storage: uploadimage,
  });


// ! Module 1:  users

router.get('/allUsers', catchAsync(adminController.allUsers));
router.get('/deleteUser/:userId', catchAsync(adminController.deleteUser));
router.get('/updateStatus/:userId', catchAsync(adminController.updateStatus));


// ! Module 2:  Packages

router.get('/getPackages', catchAsync(adminController.getPackages));
router.post('/addPackage', upload.single('image'), catchAsync(adminController.addPackage));
router.post('/editPackage', upload.single('image'), catchAsync(adminController.editPackage));


// ! Module 3:  Payment

router.get('/getPaymentMethod', catchAsync(adminController.getPaymentMethod));
router.post('/addPaymentMethod', catchAsync(adminController.addPaymentMethod));
router.post('/updatePaymentMethod', catchAsync(adminController.updatePaymentMethod));
router.get('/deletePaymentMethod/:id', catchAsync(adminController.deletePaymentMethod));



module.exports = router;