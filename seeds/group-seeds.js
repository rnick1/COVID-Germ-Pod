const { Group } = require('../models');

const groupData = [

]

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;