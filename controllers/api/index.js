const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes')
const ruleRoutes = require('./ruleRoutes')
const eventRoutes = require('./eventRoutes')
const groupRuleRoutes = require('./groupRuleRoutes')


router.use('/users', userRoutes);
router.use('/groups', groupRoutes)
router.use('/rules', ruleRoutes)
router.use('/events', eventRoutes)
router.use('/groupRules', groupRuleRoutes)


module.exports = router;