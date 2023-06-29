const router = require('express').Router();
const Post = require('../../models/post');
const Comment = require('../../models/comment');

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
    Post.findOne(
        {
            where: {
                id: req.params.id,
            },
        }
    ).then((postData) => {
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

router.post('/', async (req, res) => {
    try{
        const postData = await Post.create(req.body);
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
        res.status(404).json({ message: 'Be the first to add a comment!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;