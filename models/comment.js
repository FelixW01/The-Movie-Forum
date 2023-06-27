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
            type: DataTypes.STRING,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent_post: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
              model: 'post',
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