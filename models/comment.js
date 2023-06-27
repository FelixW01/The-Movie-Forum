const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/config');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          user: {
            type: DataTypes.UUID,
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
        parent_post: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'posts',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'comment'    
    }
);

module.exports = Comment;