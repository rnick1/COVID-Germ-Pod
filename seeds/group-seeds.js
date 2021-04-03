const { Group } = require('../models');

const groupData = [
    {
        "name": "The Freedom Kingfishers",
        "password": "passwordA"
    },
    {
        "name": "The Prime Mythics",
        "password": "passwordB"
    },
    {
        "name": "The Clever Stars",
        "password": "passwordC"
    },
]

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;