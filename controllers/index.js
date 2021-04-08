const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Designates the different routes once a user is on the page
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;