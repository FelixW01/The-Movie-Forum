const router = require('express').Router();
const Post = require('../../models/post');
const Comment = require('../../models/comment');
const fs = require('fs');
const multer = require('multer');
// Set up storage for uploaded files
const storage = multer.memoryStorage()
const upload = multer({
    storage: storage
})
const isAuth = require('../../middleware/isAuthenticated')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
    }).then((postData) => {
        res.json(postData);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id,
            },
        }).then((deletedPost) => {
            res.json(deletedPost);
        })
        .catch((err) => res.json(err));
});


router.post('/', upload.single('image'), async (req, res) => {
    try {
        const image = req.file.buffer;
        console.log(image, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.session.userId,
            movieId: req.body.movieId,
            img: image.toString('base64')
        });
        console.log(postData.image, "<<<<<<<<<<<<<<<< here!");
        // console.log(postData.movieId, "aaaaaaaaa here<<<<<<<<<");
        console.log('Post successfully created');
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id/comments', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [Comment],
            where: {
                parentPost: req.params.id,
            }
        });

        if (!postData) {
            res.status(404).json({
                message: 'Be the first to add a comment!'
            });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', isAuth, async (req, res) => {
    try {
        const postUpdate = await Post.update({
            title: req.body.title,
            content: req.body.content
        }, {
            where: {
                id: req.params.id
            },
        });
        if (!postUpdate) {
            res.status(404).json({
                message: 'Invalid post id!'
            });
            return;
        }
        res.status(200).json(postUpdate)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

})

module.exports = router;