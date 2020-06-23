const express = require('express')
const router = express.Router();
let indexController = require('../controllers/indexController')
const userValid = require('../middlewares/userValid') 
const req = require('express/lib/request');

// const userLogMiddleware = require('../middlewares/userLogs') 

router.get('/', indexController.firstfunction)
router.get('/contact', indexController.firstfunction)
router.get('/products', indexController.firstfunction)
router.get('/about', indexController.firstfunction)
router.get('/admin?:user',userValid, indexController.firstfunction)




    
 




module.exports = router;