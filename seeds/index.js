const sequelize = require('../db/config');

const { User, Movie, Post, Comment } = require('../models');

const userSeeds = require('./users.json');
const movieSeeds = require('./movie.json');
const commentSeeds = require('./comment.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  await Movie.bulkCreate(movieSeeds, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentSeeds, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
