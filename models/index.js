const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Movie = require('./movie');

Movie.hasMany(Post, {
  foreignKey: 'movieId',
  onDelete: 'CASCADE',
});

Post.belongsTo(Movie, {
  foreignKey: 'movieId',
  onDelete: 'CASCADE',
});

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

module.exports = {
  User,
  Post,
  Comment,
  Movie
};