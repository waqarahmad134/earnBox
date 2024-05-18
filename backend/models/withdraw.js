module.exports = (sequelize, DataTypes) => {
    const withdraw = sequelize.define("withdraw", {
      amount: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      accountNo: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
      }
    });
  
    withdraw.associate = (models) => {
      models.user.hasMany(withdraw);
      withdraw.belongsTo(models.user);
    };
  
    return withdraw;
  };
  