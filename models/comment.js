const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../db/config');

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'posts',
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
  modelName: 'comment'
});

module.exports = Comment;