var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
// let colorMidleware = require('../middlewares/colorMidleware')
/* GET home page. */
router.get('/', indexController.index)

router.post('/', indexController.showColor)

router.get('/color', indexController.color)

module.exports = router;
