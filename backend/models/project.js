const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
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
          msg: 'Project already exists',
        },
      },
    },
    {
      timestamps: true,
      hooks: {},
    }
  );

  // Project.belongsTo(User);
  Project.associate = (models) => {
    Project.hasMany(models.Test, {});
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Project;
};
