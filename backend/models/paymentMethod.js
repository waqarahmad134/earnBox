module.exports = (sequelize, DataTypes) => {
    const paymentMethod = sequelize.define('paymentMethod', {
        name: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        accountNo: {
            type: DataTypes.STRING(),
            allowNull: true,
        },

       
    });

// [{productid,qty,price},{productid,qty,price}]

    // Each user can have one email verification code
    paymentMethod.associate = (models) => {
        
        paymentMethod.hasMany(models.user);
        models.user.belongsTo(paymentMethod);

    };

    return paymentMethod;
};
