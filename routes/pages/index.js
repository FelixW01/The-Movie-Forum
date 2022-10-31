const router = require('express').Router();
const { DashboardController } = require('../../controllers');

router.get('/', DashboardController.getDashboard);

module.exports = router;