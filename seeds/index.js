const sequelize = require('../db/config');

const {
  User,
  Movie,
  Post,
  Comment
} = require('../models');

const movieSeeds = require('./movie.json');


const seedDatabase = async () => {
  await sequelize.sync({
    force: true
  });


  await Movie.bulkCreate(movieSeeds, {
    individualHooks: true,
  });


  process.exit(0);
};

seedDatabase();