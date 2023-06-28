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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentPost: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'posts',
      key: 'id',
    },
  },
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'comment'
});

module.exports = Comment;