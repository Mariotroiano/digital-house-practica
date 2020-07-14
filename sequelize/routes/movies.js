let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list)

router.get('/new/', moviesController.newMovies)

router.get('/detail/:idMovie/', moviesController.detail)

router.get('/recommended', moviesController.recomended)

router.get('/search', moviesController.getSearch)
router.post('/search', moviesController.search)





// Deberá mostrar los resultados de búsqueda. Cada título de película
// deberá ser un hipervínculo para ver el detalle de la misma. Idealmente el
// usuario podría elegir el criterio de ordenamiento de los resultados

module.exports = router