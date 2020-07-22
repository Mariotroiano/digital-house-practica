module.exports = (sequelize, dataTypes) => {

    let alias = "Genres";

    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true ,
            allowNull : false   
        },
        name : {
            type : dataTypes.STRING,
            allowNull : false,
            defaultValue : "no tiene genero"

        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false
        }
    };

    let config = {
        tableName: 'genres',
        timestamps : true,
        underscored : true,
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    }

    const Genre = sequelize.define(alias, cols, config)

    Genre.associate = function(models){

        Genre.hasMany(models.Movies, {
            as : 'movies',
            foreignKey : 'genre_id'
        })

        
    }

    return Genre
      
}