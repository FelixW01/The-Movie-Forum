const router = require('express').Router();

const pageRoutes = require('./pages');

router.use('/', pageRoutes);

module.exports = router;