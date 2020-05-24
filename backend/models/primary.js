const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Primary = sequelize.define(
    'Primary',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'Primary already exists',
        },
      },
    },
    {
      timestamps: true,
      hooks: {},
    }
  );

  // Primary.belongsTo(User);
  Primary.associate = (models) => {
    // Primary.hasMany(models.Secondary, {});
    Primary.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Primary;
};
