const router = require('express').Router();
const Comment = require('../../models/comment');
const isAuth = require('../../middleware/isAuthenticated')

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id,
        },
    }).then((commentData) => {
        res.json(commentData);
    });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
            where: {
                id: req.params.id,
            },
        }).then((deletedComment) => {
            res.json(deletedComment);
        })
        .catch((err) => res.json(err));
});

//creates comment
router.post('/', isAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            content: req.body.content,
            postId: req.body.postId,
            userId: req.session.userId
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;