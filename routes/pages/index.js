const router = require('express').Router();
const {
    PageController,
    UserController
} = require('../../controllers');

const isAuth = require('../../middleware/isAuthenticated');

const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./dashboard.js");


router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);



// Pages with data
router.get('/dashboard', isAuth, PageController.getDashboard);
router.get('/register', UserController.register);
router.get('/login', UserController.login);

module.exports = router;