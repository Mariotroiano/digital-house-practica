let indexFunctions = {
    index : (req, res, next) =>{
        res.render('index');
    },
    
    showColor : (req, res) =>{
        req.session.color = req.body.color
        res.render('index', { color : req.session.color});
    },

    color : (req,res)=>{
        res.render('color', { color : req.session.color});
        if(req.body.remember){
            res.cookie('remember', req.body.color, {maxAge : 20000})
        }
    }


}   
    
    
    


        
    
    
    



module.exports = indexFunctions;