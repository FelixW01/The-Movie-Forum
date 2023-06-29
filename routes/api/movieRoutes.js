const router = require('express').Router();
const Movie = require('../../models/movie');
const Post = require('../../models/post');

router.get('/', async (req, res) => {
    try{
        const movieData = await Movie.findAll();
        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const movieData = await Movie.findByPk(req.params.id, {
        include: [Post],
        where: {
          movieId: req.params.id,
        }
      });
  
      if (!movieData) {
        res.status(404).json({ message: 'No posts found for this movie' });
        return;
      }
  
      res.status(200).json(movieData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', (req, res) => {
    Movie.destroy({
        where: {
            id: req.params.id,
        },
    }).then((deletedMovie) => {
        res.json(deletedMovie);
    })
    .catch((err) => res.json(err));
});

router.post('/', async (req, res) => {
    try{
        const movieData = await Movie.create(req.body);
        res.status(200).json(movieData);
    } catch (err) {
        res.status(400).json(err);
    }
});




module.exports = router;