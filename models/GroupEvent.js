const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class GroupEvent extends Model { }

GroupEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'group',
        key: 'id'
      }
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'group_event',
  }
);

module.exports = GroupEvent;
