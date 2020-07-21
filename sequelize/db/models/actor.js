module.exports = (sequelize, dataTypes) => {
    
    let alias = "Actors";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true ,
            allowNull : false    
        },
        
        first_name: {
            type : dataTypes.STRING(100),  
            allowNull : false           
        },
        
        last_name : {
            type : dataTypes.STRING(100),  
            allowNull : false             
        },    
        
        
        rating : {
            type : dataTypes.DECIMAL,
            allowNull : false             
        },
        
    };
    
    let config = {
        tableName : 'actors',
        timeStamps : true,
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        underscored : true
    }   
    
    const Actor = sequelize.define(alias, cols, config)
    
    Actor.associate = function(models){
        Actor.belongsToMany(models.Movies, {  
            as : 'actorsMovies',
            through : "actor_movie",
            foreignKey : 'actor_id',
            otherKey : "movie_id",
            timeStamps : false
        })      
    }
         
    
    return Actor
}