const router = require('express').Router();

const apiRoutes = require('./api');
const pageRoutes = require('./pages');
const forumRoutes = require('./forum');

router.use('/', pageRoutes);
router.use('/api', apiRoutes);
router.use('/movie', forumRoutes);


module.exports = router;