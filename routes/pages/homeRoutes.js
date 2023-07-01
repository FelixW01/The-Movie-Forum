const router = require('express').Router();
const sequelize = require('../../db/config');
const isAuth = require('../../middleware/isAuthenticated')
const {
    User,
    Post,
    Comment,
    Movie
} = require('../../models');

//localhost:3001/
//findAll posts for home page
router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll({
            attributes: ['id', 'title', 'summary', 'poster'],
            include: [{
                model: Post,
                attributes: ['id', 'title', 'description', 'content', 'img', 'movieId', 'userId', 'created_at'],
            }]
        })
        //gets clean data
        const movies = movieData.map((movie) => movie.get({
            plain: true
        }))
        console.log(movies)
        res.render('homepage', {
            movies,
            loggedIn: req.session.loggedIn,
            userId: req.session.userId
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//localhost:3001/post:id
//find one post, include Comment, User
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'title', 'description', 'content', 'img', 'created_at'],
            include: [{
                    model: Comment,
                    attributes: ['id', 'content', 'postId', 'userId', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        if (postData) {
            //gets clean data
            const post = postData.get({
                plain: true
            });
            console.log(post);
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn,
                username: req.session.username,
            })
        } else {
            res.status(404).json({
                message: 'Invalid post id'
            })
            return;
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});





//signup
router.get('/register', (req, res) => {
    res.render('register')
});

//login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
module.exports = router