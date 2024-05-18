module.exports = (sequelize, DataTypes) => {
    const recharge = sequelize.define('recharge', {
        amount: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
          },
        image: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
    }
    );

    recharge.associate = (models) => {
      models.package.hasMany(recharge)
      recharge.belongsTo(models.package);
    };

    return recharge;
};
