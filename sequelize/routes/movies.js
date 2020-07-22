let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list)

router.get('/new', moviesController.newMovies)

router.get('/detail/:idMovie', moviesController.detail)

router.get('/recommended', moviesController.recomended)

router.get('/search', moviesController.getSearch)
router.post('/search', moviesController.search)


router.get('/create', moviesController.showCreate)
router.post('/create', moviesController.create)

router.get('/edit/:movieId', moviesController.showEdit)
router.put('/edit/:movieId', moviesController.edit)

router.get('/delete/:movieId', moviesController.destroy)

module.exports = router