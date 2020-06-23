const {check, validationResult, body} = require('express-validator')
let indexFunctions = {

firstfunction : function(req, res){
    
    res.send('holaaaa')
},

}

module.exports = indexFunctions;