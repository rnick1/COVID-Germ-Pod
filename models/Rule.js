const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    rule_description: {
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
