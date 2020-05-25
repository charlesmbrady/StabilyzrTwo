const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      subject: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'Test already exists',
        },
      },
      description: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      steps: {
        type: DataTypes.STRING,
      },
      expectedResults: {
        type: DataTypes.STRING,
      },
      testResultsReport: {
        type: DataTypes.STRING,
      },
      testCoverageReport: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      hooks: {},
    }
  );

  Test.associate = (models) => {
    Test.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Test.belongsTo(models.Project, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Test;
};
