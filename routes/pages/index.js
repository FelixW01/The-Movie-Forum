const router = require('express').Router();
const { PageController } = require('../../controllers');

// Static pages
router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));

// Pages with data
router.get('/', PageController.getDashboard);

module.exports = router;