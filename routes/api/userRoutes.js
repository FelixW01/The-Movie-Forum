const router = require('express').Router();
const User = require('../../models/user');
const Post = require ('../../models/post');

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
    User.findOne(
        {
            where: {
                id: req.params.id,
            },
        }
    ).then((userData) => {
        res.json(userData);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    }).then((deletedUser) => {
        res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});

router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id/posts', async (req, res) => {
    try {
        console.log('HERE');
      const userData = await User.findByPk(req.params.id, {
        include: [Post],
        where: {
          userId: req.params.id,
        }
      });

      if (!userData) {
        res.status(404).json({ message: 'Posts you make will appear here' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });



module.exports = router;