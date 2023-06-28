const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Movie = require('./movie');

Post.hasMany(Comment, {
  foreignKey: 'parent_post',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'parent_post'
});

Movie.hasMany(Post, {
  foreignKey: 'movie',
  onDelete: 'CASCADE',
});

Post.belongsToMany(Movie, {
  through: {
    model: Movie
  }
});

User.hasMany(Post, {
  foreignKey: 'user',
  onDelete: 'CASCADE'
});

Post.belongsToMany(User, {
  through: {
    model: User
  }
});

User.hasMany(Comment, {
  foreignKey: 'user',
  onDelete: 'CASCADE'
});

Comment.belongsToMany(User, {
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