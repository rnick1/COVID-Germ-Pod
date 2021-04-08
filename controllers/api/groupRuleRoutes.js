const router = require('express').Router();
const { Group, GroupRule, Rule } = require('../../models');
const withAuth = require('../../utils/auth');

// Displays the different rules in relation to the groups
router.get('/', async (req, res) => {
    try {
        const groupData = await GroupRule.findAll()
        res.status(200).json(groupData)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;