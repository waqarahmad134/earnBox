module.exports = (sequelize, DataTypes) => {
    const package = sequelize.define('package', {
        name: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        requirements: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        description: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        adsNo: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        earn: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        referalBonus: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        price: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        validity: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        image: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
    }
    );

    package.associate = (models) => {
      package.hasMany(models.ad);
      models.ad.belongsTo(package);
    };

    return package;
};
