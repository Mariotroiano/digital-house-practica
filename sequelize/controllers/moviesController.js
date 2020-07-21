let db = require('../db/models');


let moviesFunctions = {

list : (req, res) => {
    db.Movies.findAll(
        {
            include : [{association : 'genres'}]
        }
    )
    .then(movies => {      
    console.log(movies)
       
        res.render('movies', {movies : movies})
    })
    .catch(err =>{
        console.log(err);
        res.send('sucedio un error')
    })   
},

detail : (req, res)=> {
    db.Movies.findByPk(req.params.idMovie, {
        include : [ {association : 'genres'}, {association : 'actors'}]
    })
    .then(movie =>{
        res.render('movie-detail', {movie : movie})
    })
    .catch(err =>{
        console.log(err)
        res.send("ocurrio un error")
    })
},

  newMovies : (req, res) => {
      db.Movies.findAll({
         order : [
             ["release_date", "DESC"]
            ],
         limit : 5
      })
      .then(movies => {
          
          res.render('new-movies', {movies : movies})
      })
      .catch(err =>{
        console.log(err)
        res.send("ocurrio un error")
    })
  },
  
  recomended : (req, res) => {
    db.Movies.findAll({
        where : {
            rating : {
                [db.Sequelize.Op.gte] : 8
            }
        }
    })
    .then(movies => {
        res.render('movies-recomended', {movies : movies})
    })
    .catch(err =>{
        console.log(err)
        res.send("ocurrio un error")
    })
},

getSearch : (req, res) => {

        res.render('search-movie')
},

search : (req, res ) => {

    db.Movies.findOne({
        where : {
            title : {
                [db.Sequelize.Op.substring] : req.body.movieName
            }
        }
    })
    .then(movie => {
        res.render('show-movie', {movie : movie})
    })
    .catch(err =>{
        console.log(err)
        res.send("ocurrio un error")
    })
},

showCreate : (req, res) => {
    res.render('create-movies')
},

create : (req, res) => {  
    db.Movies.create({
        ...req.body
    })
    .then(movie =>{
        console.log(movie)
        res.redirect('/movies')
    })
},

showEdit : (req, res) => {
    db.Movies.findByPk(req.params.movieId)
    .then(movie => {
        console.log(movie)
        res.render('movies-edit', {movie : movie})
    })
    .catch(err => {
        console.log(err)
        res.send('no se encontro la pelicula')
    })
},

edit : (req, res) => {

    db.Movies.update({
        ... req.body
    }, 
    {
        where : {
            id : req.params.movieId
        }
    })
    .then(movie => {
        res.redirect('/movies')
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
        res.redirect('/movies')
    })
    .catch(err => {
        console.log(err)
        res.send('no se pudo eliminar la pelicula')
    })
}
  

}

module.exports = moviesFunctions