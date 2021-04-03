const { Group } = require('../models');

const groupData = [
    {
        "name": "The Freedom Kingfishers",
        "password": "passwordA",
        "rule": "Do not lick doorknobs."
    },
    {
        "name": "The Prime Mythics",
        "password": "passwordB",
        "rule": "Do not sneeze."
    },
    {
        "name": "The Clever Stars",
        "password": "passwordC",
        "rule": "Wear a mask."
    },
]

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;