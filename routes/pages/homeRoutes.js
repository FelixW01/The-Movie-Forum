const router = require('express').Router();
const sequelize = require('../../db/config');
const isAuth = require('../../middleware/isAuthenticated')
const {
    User,
    Post,
    Comment,
    Movie
} = require('../../models');

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
// , {
//     model: User,
//     attributes: ['username']
// }
//find one post, include Comment, User
router.get('/movie/:id', async (req, res) => {
    try {
        const movieData = await Movie.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'title', 'summary', 'poster'],
            include: [{
                model: Post,
                attributes: ['id', 'title', 'description', 'content', 'img', 'movieId', 'userId', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            }]
        })
        if (movieData) {
            //gets clean data
            const movie = movieData.get({
                plain: true
            });
            console.log(movie);
            res.render('forum-page', {
                movie,
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

// get many post
// router.get('/movie:/id', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             attributes: ['id', 'title', 'description', 'content', 'img', 'movieId', 'userId', 'created_at'],
//             include: {
//                 model: User,
//                 attributes: ['username'],
//             },
//         }, {
//             model: User,
//             attributes: ['username']
//         })
//         //gets clean data
//         const posts = postData.map((post) => post.get({
//             plain: true
//         }))
//         console.log(posts)
//         res.render('forum-page', {
//             posts,
//             loggedIn: req.session.loggedIn,
//             userId: req.session.userId
//         });
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err);
//     }
// });






//signup
router.get('/register', (req, res) => {
    res.render('register')
});

//login
router.get('/login', (req, res) => {
    if (req.session.isAuthenticated) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
module.exports = router