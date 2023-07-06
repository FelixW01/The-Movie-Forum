const sequelize = require('../db/config');

const {
  User,
  Movie,
  Post,
  Comment
} = require('../models');

const userSeeds = require('./users.json');
const movieSeeds = require('./api.json');
const commentSeeds = require('./comment.json');
const postSeeds = require('./post.json');

const seedDatabase = async () => {
  await sequelize.sync({
    force: true
  });

  await User.bulkCreate(userSeeds, {
    individualHooks: true,
  });

  await Movie.bulkCreate(movieSeeds, {
    individualHooks: true,
  });

  await Post.bulkCreate(postSeeds, {
    individualHooks: true,
  });

  await Comment.bulkCreate(commentSeeds, {
    individualHooks: true,
  });


  process.exit(0);
};

seedDatabase();