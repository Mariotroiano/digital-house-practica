const {check, validationResult, body} = require('express-validator')
let indexFunctions = {

firstfunction : function(req, res){
    
    res.send('holaaaa')
},
checkUser : function(req, res){
    res.send(`Hola ${req.query.user}`)
}
}

module.exports = indexFunctions;