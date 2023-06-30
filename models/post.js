const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../db/config');

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'movies',
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
}, {
  sequelize,
  timestamps: true,
  underscored: true,
  modelName: 'post'
});

module.exports = Post;