let db = require('../db/models');

let moviesFunctions = {

list : (req, res) => {
    db.Movies.findAll()
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
    db.Movies.findByPk(req.params.idMovie)
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
          console.log(movies)
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

search : (req, res ) => {

    db.Movies.findOne({
        where : {
            title : {
                [db.Sequelize.Op.substring] : req.query.text
            }
        }
    })
    .then(movie => {
        res.render('search-Movie', {movie : movie})
    })
    .catch(err =>{
        console.log(err)
        res.send("ocurrio un error")
    })
}




  

}

module.exports = moviesFunctions