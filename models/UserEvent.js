const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class UserEvent extends Model { }

UserEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    event_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'event',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_event',
  }
);

module.exports = UserEvent;
