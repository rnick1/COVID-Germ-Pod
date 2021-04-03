const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class GroupRule extends Model { }

GroupRule.init(
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
    rule_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rule',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'group_rule',
  }
);

module.exports = GroupRule;
