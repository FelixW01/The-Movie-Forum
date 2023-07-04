const router = require('express').Router();

const homeRoutes = require("./forum-home.js");


router.use('/', homeRoutes);


module.exports = router;