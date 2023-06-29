const router = require('express').Router();
const { UserController } = require('../../controllers');
const postRoutes = require('./postRoutes');
const movieRoutes = require('./movieRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

const isAuthenticated = require('../../middleware/isAuthenticated');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', isAuthenticated, UserController.logout);
router.use('/posts', postRoutes);
router.use('/movies', movieRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
