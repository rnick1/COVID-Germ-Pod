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
        // May want to add more validators 
      },
    },
  //   rule_id: {
  //       type: DataTypes.INTEGER,
  //       allowNull: false,
  //       references: {
  //         model: 'rule',
  //         key: 'id'
  //       }
  //   },
  //   event_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     references: {
  //       model: 'event',
  //       key: 'id'
  //     }
  // },
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
