const { GroupRule } = require('../models');

const groupRuleData = [
    {
        "group_id": 1,
        "rule_id": 1,
    },
    {
        "group_id": 1,
        "rule_id": 2,
    },
    {
        "group_id": 2,
        "rule_id": 3,
    },
    {
        "group_id": 2,
        "rule_id": 2,
    },
]

const seedGroupRules = () => GroupRule.bulkCreate(groupRuleData);

module.exports = seedGroupRules;