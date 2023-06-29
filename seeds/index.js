const sequelize = require('../db/config');
const { User } = require('../models');
const userSeeds = require('./users.json');
const { generateSeed } = require('./db/generateSeeds');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
