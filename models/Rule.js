const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// This is the shape of the rule data
class Rule extends Model {}
Rule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'rule',
    }
  );

module.exports = Rule;
