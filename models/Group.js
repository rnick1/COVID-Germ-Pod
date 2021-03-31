const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    rules_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true, 
        references: {
          model: 'rules',
          key: 'id'
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, 
      references: {
        model: 'user',
        key: 'id'
      }
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'group'
  }
);

module.exports = Group;
