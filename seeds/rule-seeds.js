const { Rule } = require('../models');

const ruleData = [
    {
        "name": "Mask",
        "rule_description": "Wear a mask at all times. No exceptions."
    },
    {
        "name": "Handshakes",
        "rule_description": "Do not shake hands."
    },
    {
        "name": "Hand Washing",
        "rule_description": "Wash hands briskly for 20 seconds or longer."
    },
]

const seedRules = () => Rule.bulkCreate(ruleData);

module.exports = seedRules;