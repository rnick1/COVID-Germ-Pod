const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// This is the shape of the event data
class Event extends Model {}
Event.init(
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
      modelName: 'event',
    }
);

module.exports = Event;
