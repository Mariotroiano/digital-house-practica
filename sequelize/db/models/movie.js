module.exports = (sequelize, dataTypes) => {

    let alias = 'Movies';

    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true ,
            allowNull : false    
        },

        title: {
            type : dataTypes.STRING(400),  
            allowNull : false           
        },

        rating : {
            type : dataTypes.DECIMAL,
            allowNull : false             
        },

        awards : {
            type : dataTypes.INTEGER,
            allowNull : false    
            
        },
        release_date : {
            type : dataTypes.DATE, 
            allowNull : false          
        },

        length : {
            type : dataTypes.INTEGER,
            allowNull : true          
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
        }

    };

    let config = {
        tableName : 'movies',
        timeStamps : true,
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        underscored : true
    }   
    
    const Movie = sequelize.define(alias, cols, config)
    
    Movie.associate = function(models) {
        Movie.belongsTo(models.Genres , {
            as : 'genres',
            foreignKey : 'genre_id'
        })

        Movie.belongsToMany(models.Actors, {  
            as : 'actors',
            through : "actor_movie",
            foreignKey : 'movie_id',
            otherKey : "actor_id",
            timeStamps : false
        })      
    }
    return Movie
        
}   



