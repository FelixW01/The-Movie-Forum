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
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'movies',
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
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