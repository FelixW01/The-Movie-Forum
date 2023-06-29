const router = require('express').Router();
const sequelize = require('../../db/config');
const isAuth = require('../../middleware/isAuthenticated')
const {
    User,
    Post,
    Comment,
    Movie
} = require('../../models');

router.get('/', isAuth, (req, res) => {
    res.render('dashboard')
})

module.exports = router