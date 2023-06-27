const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/config');

class Movie extends Model {}

Movie.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poster: {
            type: DataTypes.BLOB,
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'movie'    
    }
);

module.exports = Movie;