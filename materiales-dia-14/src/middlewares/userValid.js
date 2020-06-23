function validationUser (req, res, next){
    let users = ['Ada', 'Greta', 'Tim', 'Vim' ];

    if (!req.query.user || !users.includes(req.query.user)){
        res.send('no tenes permisos para ingresar')
    }
    next()
} 
module.exports = validationUser
        
   
