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
    return Movie
        
}   



