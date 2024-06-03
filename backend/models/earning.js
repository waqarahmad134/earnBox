module.exports = (sequelize, DataTypes) => {
  const earning = sequelize.define("earning", {
    paid: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    amount: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
  });

  earning.associate = (models) => {
    models.ad.hasMany(earning);
    earning.belongsTo(models.ad);
  };

  return earning;
};
