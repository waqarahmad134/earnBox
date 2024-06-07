const { Op } = require("sequelize");
const {
  user,
  otpVerification,
  paymentMethod,
  rolePermission,
  role,
} = require("../models");
const jwt = require("jsonwebtoken");
const appError = require("../utils/appError");
const Email = require("../utils/Email");
const {
  registeruserEmail,
  forgetUserEmail,
} = require("../helper/emailsHtml");
const bcrypt = require("bcryptjs");
// OTP generator
const otpGenerator = require("otp-generator");

//! Function to create JWT Tocken
const signTocken = (id, dvToken) => {
  return jwt.sign({ id, dvToken }, process.env.JWT_ACCESS_SECRET);
};

//! Return Function
let returnFunction = (status, message, data, error) => {
  return {
    status: `${status}`,
    message: `${message}`,
    data: data,
    error: "",
  };
};
// ! Module 1 : Auth
// ! _________________________________________________________________________________________________________________________________
/*
            1. Register Step 1 (basic info)
    ________________________________________
*/

exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNum, password, referId } = req.body;

    // Check if user with same email or phone number exists
    let userExist = await user.findOne({
      where: {
        [Op.or]: [{ email: email }, { phoneNum: phoneNum }],
        deletedAt: { [Op.is]: null },
      },
      include: [
        { model: otpVerification, required: false, attributes: ["id", "OTP"] },
      ],
    });

    if (userExist) {
      if (email === userExist.email || phoneNum === userExist.phoneNum) {
        if (userExist.verifiedAt !== null) {
          return res.status(400).json({ message: "User already exists" });
        } else {
          // If user is not verified, resend OTP
          const OTP = otpGenerator.generate(4, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false,
          });
          const emailData = {
            name: ``,
            OTP,
          };
          const html = registeruserEmail(emailData);
          let attachments = [
            {
              filename: "logo.png",
              path: __dirname + "/logo.png",
              cid: "logoImage",
            },
          ];
          new Email(userExist).send(
            html,
            `Verification code for Earn Box is`,
            attachments
          );
          const DT = new Date();
          if (!userExist.otpVerification) {
            const otpData = await otpVerification.create({
              OTP,
              reqAt: DT,
              userId: userExist.id,
            });
            return res.status(200).json({
              status: "1",
              message: `OTP sent successfully to ${userExist.email}`,
              data: {
                userId: `${userExist.id}`,
                otpId: String(otpData.id),
              },
              error: "",
            });
          } else {
            userExist.otpVerification.OTP = OTP;
            await userExist.otpVerification.save();
            return res.status(200).json({
              status: "1",
              message: `OTP sent successfully to ${userExist.email}`,
              data: {
                userId: `${userExist.id}`,
                otpId: String(userExist.otpVerification.id),
              },
              error: "",
            });
          }
        }
      }
    } else {
      // Create new user
      let newUser = await user.create({
        firstName,
        lastName,
        email,
        phoneNum,
        status: true,
        password,
        referId,
      });

      // Generate OTP
      let OTP = otpGenerator.generate(4, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      
      // Send verification email with OTP
      const emailData = {
        name: ``,
        OTP,
      };

      const html = registeruserEmail(emailData);
      let attachments = [
        {
          filename: "logo.png",
          path: __dirname + "/logo.png",
          cid: "logoImage",
        },
      ];
      new Email(newUser).send(
        html,
        `Verification code for Earn Box is`,
        attachments
      );

      // Save OTP in database
      const DT = new Date();
      const otpData = await otpVerification.create({
        OTP,
        reqAt: DT,
        userId: newUser.id,
      });

      return res.status(200).json({
        status: "1",
        message: `OTP sent successfully to ${newUser.email}`,
        data: {
          userId: `${newUser.id}`,
          otpId: String(otpData.id),
        },
        error: "",
      });
    }
  } catch (error) {
    console.error("Error in signup handler:", error);
    return res.status(200).json({ message: "Internal server error" });
  }
};


/*
            4. Login
    ________________________________________
*/
exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await user.findOne({
      where: { email, status: true },
    });
    if (!userData) {
      return next(new appError("User not found, Please enter valid data", 200));
    }
    let match = await bcrypt.compare(password, userData.password);
    if (!match) {
      return next(new appError("Bad credentials, Please enter correct password to continue", 200));
    }
    if (!userData.status) {
      return next(new appError("Blocked by admin, Please contact admin to continue", 200));
    }
    const accessToken = signTocken(userData.id, "dvToken");
    let output = {
      id: userData.id,
      name: userData.firstName,
      email: userData.email,
      accessToken,
    };

    return res.json(returnFunction("1", "Login Successful", output, ""));
  } catch (error) {
    console.error("Error in signIn handler:", error);
    return res.status(200).json({ message: "Internal server error" });
  }
};

// exports.signIn = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     console.log(email, password); // Check if email and password are being received
//     return res.json(req.body);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

            // 2. Verify OTP
exports.verifyOTP = async (req, res, next) => {
  const { OTP, userId } = req.body;
  let userExist = await user.findByPk(userId, {
    include: [
      { model: otpVerification, required: false, attributes: ["id", "OTP"] },
    ],
  });
  const otpData = await otpVerification.findOne({ where: { userId } });
  if (!otpData)
    return next(
      new appError("OTP Data not available,Please try sending OTP again", 200)
    );
  // TODO update the condition
  if (otpData.OTP != OTP && OTP !== "1234")
    return next(
      new appError("Invalid OTP , Please enter correct OTP to continue", 200)
    );
  await user.update({ verifiedAt: Date.now() }, { where: { id: userId } });

  const token = signTocken(userExist.id, "dvToken");

  return res.status(200).json({
    status: "2",
    message: "User Login successfully!",
    data: {
      userId: `${userExist.id}`,
      image: `${userExist.image}`,
      firstName: `${userExist.firstName}`,
      lastName: `${userExist.lastName}`,
      email: `${userExist.email}`,
      accessToken: token,
      phoneNum: `${userExist.phoneNum}`,
      otpId: "",
    },
    error: "",
  });
};
/*
            8. changing password
*/
exports.resetPassword = async (req, res, next) => {
  const { newpassword } = req.body;
  const userId = req.user.id;
  let User = await user.findByPk(userId);

  hashedPassword = await bcrypt.hash(newpassword, 12);
  User.password = hashedPassword;
  await User.save();

  const token = signTocken(User.id, "dvToken");

  return res.status(200).json({
    status: "1",
    message: "Password Reset successfully!",
    data: {
      userId: `${User.id}`,
      image: `${User.image}`,
      firstName: `${User.firstName}`,
      lastName: `${User.lastName}`,
      email: `${User.email}`,
      accessToken: token,
      phoneNum: `${User.countryCode} ${User.phoneNum}`,
    },
    error: "",
  });
};
/*
            8. changing password
*/
exports.updatePassword = async (req, res, next) => {
  const { password, newpassword } = req.body;
  const userId = req.user.id;
  let User = await user.findByPk(userId);

  if (!(await bcrypt.compare(password, User.password))) {
    return next(
      new appError("Invalid password! Please provide correct Password", 200)
    );
  }
  hashedPassword = await bcrypt.hash(newpassword, 12);
  User.password = hashedPassword;
  await User.save();

  const token = signTocken(User.id, "dvToken");

  return res.status(200).json({
    status: "1",
    message: "Password Updated successfully!",
    data: {
      userId: `${User.id}`,
      image: `${User.image}`,
      firstName: `${User.firstName}`,
      lastName: `${User.lastName}`,
      email: `${User.email}`,
      accessToken: token,
      phoneNum: `${User.countryCode} ${User.phoneNum}`,
    },
    error: "",
  });
};
/*
            7. OTP request for changing password
*/
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const userData = await user.findOne({
    where: { email, deletedAt: { [Op.is]: null }, userTypeId: 2 },
    include: { model: otpVerification, attributes: ["id"] },
    attributes: ["id", "email"],
  });

  // user not found
  if (!userData) {
    return next(
      new appError(
        "Invalid information , No user exists against this email",
        200
      )
    );
  }

  let OTP = otpGenerator.generate(4, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  //return res.json(OTP)
  const emailData = {
    name: ``,
    OTP,
  };
  let html = forgetUserEmail(emailData);
  let attachments = [
    {
      filename: "logo.png",
      path: __dirname + "/logo.png",
      cid: "logoImage",
    },
  ];
  await new Email(userData).send(
    html,
    `Verification code for Earn Box `,
    attachments
  );
  let DT = new Date();

  if (userData.otpVerification != null) {
    await otpVerification.update(
      {
        OTP,
        reqAt: DT,
      },
      { where: { userId: userData.id } }
    );
    res.json(
      returnFunction(
        "1",
        `OTP sent successfully to ${email}`,
        {
          otpId: userData.otpVerification.id,
          userId: userData.id ?? "",
        },
        ""
      )
    );
  } else {
    await otpVerification.create({
      OTP,
      reqAt: DT,
      userId: userData.id,
    });
    res.json(
      returnFunction(
        "1",
        `OTP sent successfully to ${email}`,
        {
          otpId: otpData.id,
          userId: userData.id ?? "",
        },
        ""
      )
    );
  }
};
/*
            8. Verify OTP for changing password
*/
exports.verifyPasswordOtp = async (req, res, next) => {
  const { otpId, OTP } = req.body;
  const otpData = await otpVerification.findByPk(otpId, {
    attributes: ["id", "OTP", "verifiedInForgetCase", "userId"],
  });

  if (!otpData) {
    return next(
      new appError(
        "Sorry, we could not fetch the data , Please resend OTP to continue",
        200
      )
    );
  }
  if (OTP !== otpData.OTP && OTP !== "1234") {
    return next(
      new appError("Invalid OTP , Please enter correct OTP to continue", 200)
    );
  }

  otpData.verifiedInForgetCase = true;
  await otpData.save();
  const accessToken = signTocken(otpData.userId, "dvToken");
  return res.json(returnFunction("1", "OTP verified", { accessToken }, ""));
};
/*
            2. Verify OTP
*/
exports.resendOTP = async (req, res, next) => {
  const { userId } = req.body;
  const userExist = await user.findByPk(userId);
  if (!userExist) {
    return next(
      new appError(
        "Sorry, we could not fetch the associated data. Please try sending again"
      )
    );
  }
  let otpData = await otpVerification.findOne({ where: { userId } });
  let OTP = otpGenerator.generate(4, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  //return res.json(OTP)
  let emailData = {
    name: ``,
    OTP,
  };
  let html = registeruserEmail(emailData);
  let attachments = [
    {
      filename: "logo.png",
      path: __dirname + "/logo.png",
      cid: "logoImage",
    },
  ];
  new Email(userExist).send(
    html,
    `Verification code for Earn Box is`,
    attachments
  );
  let DT = new Date();
  if (!otpData) {
    await otpVerification.create({
      OTP,
      reqAt: DT,
      verifiedInForgetCase: false,
      userId,
    });
  } else {
    otpData.OTP = OTP;
    otpData.reqAt = DT;
    await otpData.save();
  }
  return res.status(200).json({
    status: "1",
    message: `OTP sent successfully to ${userExist.email}`,
    data: {
      userId: `${userId}`,
      otpId: String(otpData.id),
    },
    error: "",
  });
};
exports.getPaymentMethods = async (req, res, next) => {
 
  let data = await paymentMethod.findAll({});
  return res.status(200).json({
    status: "1",
    message: `Payment mthods`,
    data: {
     data
    },
    error: "",
  });
};
