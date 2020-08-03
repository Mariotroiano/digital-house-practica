let express = require('express');
let router = express.Router();
let moviesAPIcontroller = require('../../controllers/api/moviesAPIcontroller')

router.get('/', moviesAPIcontroller.list)

router.get('/:movieId', moviesAPIcontroller.detail)

router.post('/', moviesAPIcontroller.create)

router.put('/:movieId', moviesAPIcontroller.update)

router.delete('/:movieId', moviesAPIcontroller.destroy)
module.exports = router