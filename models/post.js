const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/config');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
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
            type: DataTypes.BLOB
        },
        movie: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
              model: 'movie',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;