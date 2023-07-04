const router = require('express').Router();
const {
    UserController
} = require('../../controllers');

const isAuth = require('../../middleware/isAuthenticated');

const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");


router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);


// Pages with data
router.get('/register', UserController.register);
router.get('/login', UserController.login);

module.exports = router;