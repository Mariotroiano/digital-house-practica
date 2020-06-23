function validationUser (req, res, next){
    if (req.query.user == 'Ada' || req.query.user == 'Greta' || req.query.user == 'Tim' || req.query.user == 'Vim'){
        res.send(`Hola ${req.query.user}`)
    }else{
        res.send('no tenes permisos para ingresar')
    }
    next()
} 

module.exports = validationUser