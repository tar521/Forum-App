module.exports = (sequelize, Sequelize) => {
    const Budget = sequelize.define("budget", {
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    });
    Budget.associate = function (models) {
      Budget.hasMany(models.item, {
        onDelete: "CASCADE",
      });
      Budget.belongsTo(models.user);
    };
    return Budget;
  };