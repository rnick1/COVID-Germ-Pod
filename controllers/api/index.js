const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes')
const ruleRoutes = require('./ruleRoutes')
// const eventRoutes = require('./eventRoutes')


router.use('/users', userRoutes);
router.use('/groups', groupRoutes)
router.use('/rules', ruleRoutes)
// router.use('/events', eventRoutes)


module.exports = router;