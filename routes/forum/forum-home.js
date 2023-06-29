const router = require('express').Router();
const sequelize = require('../../db/config');
const isAuth = require('../../middleware/isAuthenticated')
const {
    User,
    Post,
    Comment,
    Movie
} = require('../../models');

//findAll posts for forum
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'description', 'content', 'img', 'created_at'],
            include: [{
                    model: Comment,
                    attributes: ['id', 'content', 'parentPost', 'userId', 'created_at'],
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
        //gets clean data
        const posts = postData.map((post) => post.get({
            plain: true
        }))
        // console.log(posts)
        res.render('forum-page', {
            posts,
            loggedIn: req.session.loggedIn,
            username: req.session.username,
            userId: req.session.userId
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

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
                    attributes: ['id', 'content', 'parentPost', 'userId', 'created_at'],
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

module.exports = router