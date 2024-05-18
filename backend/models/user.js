const { DataTypes } = require("sequelize");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize) => {
  const user = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "First Name is Required",
        },
        notEmpty: {
          msg: "First Name cannot be empty",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Last Name is Required",
        },
        notEmpty: {
          msg: "Last Name cannot be empty",
        },
      },
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      defaultValue: '',
      unique: {
        name: 'Email',
        msg: 'Email address is already in use'
      },
      validate: {
        notEmpty: {
          msg: 'Email cannot be empty'
        },
        isEmail: {
          msg: 'Invalid email format'
        }
      }
    },
    phoneNum: {
      type: DataTypes.STRING(72),
      allowNull: true,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    cnic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kyc: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    referId : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    referBy : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wallet : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    paymentProof: {
      type: DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    paymentStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    verifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    verifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
   
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    uniqueKeys: {
      Email: {
        fields: ['email']
      }
    }
  },
  );

  user.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 12);
  });

  user.associate = (models) => {
    models.package.hasMany(user);
   user.belongsTo(models.package);

   user.hasMany(models.recharge);
   models.recharge.belongsTo(user);

   user.hasMany(models.earning);
   models.earning.belongsTo(user);

   user.hasMany(models.otpVerification);
   models.otpVerification.belongsTo(user);

  };
  // hook to convert created at time stamp
  user.addHook("beforeFind", (options) => {
    if (options.attributes) {
      options.attributes.exclude = ["deletedAt", "updatedAt"];
    }
  });

  return user;
};
