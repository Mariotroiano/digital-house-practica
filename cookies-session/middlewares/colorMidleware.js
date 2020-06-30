
let colorsMidlewares = {
    showColor : (req, res) =>{
        req.session.color = req.body.color
        res.render('index', { color : req.session.color});
    },

    color : (req,res)=>{
        res.render('color', { color : req.session.color});
    }
}


module.exports = colorsMidlewares