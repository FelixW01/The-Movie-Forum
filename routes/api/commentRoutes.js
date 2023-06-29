const router = require('express').Router();
const Comment = require('../../models/comment');

router.get('/', async (req, res) => {
    try{
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
    Comment.findOne(
        {
            where: {
                id: req.params.id,
            },
        }
    ).then((commentData) => {
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

router.post('/', async (req, res) => {
    try{
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;