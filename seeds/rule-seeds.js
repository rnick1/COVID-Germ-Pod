const { Rule } = require('../models');

const ruleData = [
    {
        "name": "Mask",
        "description": "Wear a mask at all times. No exceptions."
    },
    {
        "name": "Handshakes",
        "description": "Do not shake hands."
    },
    {
        "name": "Hand Washing",
        "description": "Wash hands briskly for 20 seconds or longer."
    },
]

const seedRules = () => Rule.bulkCreate(ruleData);

module.exports = seedRules;