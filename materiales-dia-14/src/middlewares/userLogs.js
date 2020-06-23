const fs = require('fs');
const path = require('path')
let filePathUserLog = path.join(__dirname, '../logs/userLogs.txt')

let userLogFunctions = {
    
 accesUser : function (req, res, next){
     let file = fs.readFileSync(filePathUserLog , {encoding : 'utf8'})
     let message = `el usuario accedio a la ruta ${req.url}`
     fs.appendFileSync(filePathUserLog, `${message}
     `)
     
     next();
     },

    
    }
   
module.exports = userLogFunctions