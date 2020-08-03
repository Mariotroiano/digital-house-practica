
let db = require('../../db/models');

moviesFunctions = {
    list : (req, res) => {
        db.Movies.findAll(
            {
                include : [{association : 'genres'}]
            }
        )
        .then(movies => {      
            movies.forEach(movie=>{
                movie.setDataValue('endpoint', `/api/movies/${movie.id}`)
            })
            let response = {
                meta : {
                    status : 200,
                    length : movies.length,
                    url : '/api/movies'
                },
                data : movies
            }           
            res.send(response)
        })
        .catch(err =>{
            console.log(err);
            res.send('sucedio un error')
        })   
    },
    detail : (req, res)=> {
        db.Movies.findByPk(req.params.movieId, {
            include : [ {association : 'genres'}, {association : 'actors'}]
        })
        .then(movie =>{
            let response = {
                meta : {
                    status : 200,                    
                    url : '/api/movies/:movieId'
                },
                data : movie
            };

            res.send(response)
        })
        .catch(err =>{
            console.log(err)
            res.send("ocurrio un error")
        })
    },

    create : (req, res) => {  
        db.Movies.create({
            ...req.body
        })
        .then(movie =>{
           
            res.send({
                status : 201
            })
        })
    },
    update : (req, res) => {

        db.Movies.update({
            ... req.body
        }, 
        {
            where : {
                id : req.params.movieId
            }
        })
        .then(movie => {
            let response = {
                status : 204,                    
                url : '/api/movies/:movieId',
                id : movie.id
            }

            res.send(response)
        })
        .catch(err => {
            console.log(err);
            res.send('no se pudo editar la pelicula')
        })
    },

    destroy : (req, res) => {
        db.Movies.destroy({
            where : {
                id : req.params.movieId
            }
        })
        .then(movie => {
            let meta = {
                status : 204,
                url : '/api/movies/:movieId',
                id : req.params.movieId 
            }

            res.send(meta)
        })
        .catch(err => {
            console.log(err)
            res.send('no se pudo eliminar la pelicula')
        })
    }
}

module.exports = moviesFunctions