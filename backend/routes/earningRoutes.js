const express = require("express");
const router = express();
const multer = require("multer");
const path = require("path");
const earningController = require("../controllers/earningController");
const validateToken = require("../middlewares/accessCheck");
const catchAsync = require("../middlewares/catchAync");

const uploadimage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./Public/paymentProof`);
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

router.post("/updateUserDetails", catchAsync(earningController.updateUserDetails));
router.get("/getPaymentMethods", earningController.getPaymentMethods);
// ! Module 1:  Auth
// router.use(validateToken);
router.get("/getPackages", catchAsync(earningController.getPackages));
router.post(
  "/selectPackage",
  upload.single("paymentProof"),
  earningController.selectPackage
);

router.get(
  "/getUserDetails/:userId",
  catchAsync(earningController.getUserDetails)
);
router.get("/getUserAds/:userId", catchAsync(earningController.getUserAds));
router.post("/watchAd", catchAsync(earningController.watchAd));

router.get("/dashboard/:userId", catchAsync(earningController.dashboard));
router.post("/withdrawRequest", catchAsync(earningController.withdrawRequest));
router.get("/getWithdraw", catchAsync(earningController.getWithdraw));
router.get(
  "/getEarningHistory/:userId",
  catchAsync(earningController.getEarningHistory)
);

// ! Module 2: Agent Dashboard
// 1.  Get
//router.get('/agentDashboard', validateToken, checkPermission,  asyncMiddleware(adminController.getAllCustomers))

module.exports = router;
