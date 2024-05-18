module.exports = (sequelize, DataTypes) => {
    const wallet = sequelize.define("wallet", {
      totalEarnings: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      availableBalance: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
    });
  
    wallet.associate = (models) => {
      wallet.belongsTo(models.user);
    };
  
    return wallet;
  };
  