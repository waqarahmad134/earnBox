module.exports = (sequelize, DataTypes) => {
  const ad = sequelize.define("ad", {
    title: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    usage: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
  });

  ad.associate = (models) => {
  };

  return ad;
};
