const { DashboardController } = require('../controllers');

module.exports = app => {
  app.get('/', DashboardController.getDashboard);
}