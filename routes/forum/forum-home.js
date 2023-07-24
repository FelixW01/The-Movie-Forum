const router = require("express").Router();
const sequelize = require("../../db/config");
const isAuth = require("../../middleware/isAuthenticated");
const { User, Post, Comment, Movie } = require("../../models");
require("dotenv").config();

//findAll posts for forum
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["id", "title", "content", "img", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "content", "parentPost", "userId", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    //gets clean data
    const posts = postData.map((post) =>
      post.get({
        plain: true,
      })
    );
    res.render("forum-page", {
      posts,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//find all movies for home
router.get("/:id", async (req, res) => {
  try {
    const movieData = await Movie.findOne({
      where: { id: req.params.id },
      attributes: ["id", "title", "summary", "poster"],
      include: [
        {
          model: Post,
          attributes: [
            "id",
            "title",
            "content",
            "img",
            "movieId",
            "userId",
            "created_at",
          ],
          include: [{
            model: User,
            attributes: ["username"],
          }],
        },
      ],
    });

    if (movieData) {
      //gets clean data
      const movie = movieData.get({ plain: true })

      const url = `https://api.themoviedb.org/3/movie/${movie.id}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.DB_KEY}`,
        },
      };
      const movieDetails = await fetch(url, options).then((res) => res.json())
      const languagesWithFlagFix = movieDetails.spoken_languages.map(language => {
        const isoCode = language.iso_639_1 === 'en' ? 'us' : language.iso_639_1;
        return { ...language, iso_639_1: isoCode };
      });
      movieDetails.spoken_languages = languagesWithFlagFix;

      res.render("forum-page", {
        movie: {...movie, ...movieDetails},
        loggedIn: req.session.loggedIn,
        username: req.session.username,
      });
    } else {
      res.status(404).json({
        message: "Invalid post id",
      });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
