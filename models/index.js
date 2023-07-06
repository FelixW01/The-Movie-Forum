const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Movie = require('./movie');

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Movie.hasMany(Post, {
  foreignKey: 'movieId',
  onDelete: 'CASCADE',
});

Post.belongsToMany(Movie, {
  through: {
    model: Movie
  }
});

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  through: {
    model: User
  }
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  through: {
    model: User
  }
})

module.exports = {
  User,
  Post,
  Comment,
  Movie
};