const router = require('express').Router();
const sequelize = require('../../db/config');
const isAuth = require('../../middleware/isAuthenticated')
const {
    User,
    Post,
    Comment,
    Movie
} = require('../../models');

//localhost:3001/dashboard
router.get('/', isAuth, (req, res) => {
    //findAll posts from db
    Post.findAll({
            where: {
                userId: req.session.userId,
            },
            attributes: ['id', 'title', 'content', 'img', 'created_at'],
            include: [{
                    model: Comment,
                    attributes: ['id', 'content', 'userId', 'postId', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributs: ['username'],
                },
            ],
        })
        .then((postData) => {
            const posts = postData.map((post) => post.get({
                plain: true
            }));
            console.log(posts)
            res.render('dashboard', {
                posts,
                loggedIn: req.session.loggedIn,
                username: req.session.username,
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err);
        });
});

//Create new posts
router.get('/new', async (req, res) => {
    try {
        const movieData = await Movie.findAll({
            attributes: ['id', 'title', 'summary', 'poster'],
            include: [{
                model: Post,
                attributes: ['id', 'title', 'content', 'img', 'movieId', 'userId', 'created_at'],
            }]
        })
        //gets clean data
        const movies = movieData.map((movie) => movie.get({
            plain: true
        }))
        console.log(movies)
        res.render('new-post', {
            movies,
            loggedIn: req.session.loggedIn,
            userId: req.session.userId,
            username: req.session.username,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'title', 'content', 'img', 'created_at'],
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
            res.render('edit-post', {
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



module.exports = router