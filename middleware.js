module.exports = fillterUser = (req,res,next) => {
    if(!req.query.age){
        res.send('Access denied')
    }else if(req.query.age < 18){
        res.send('bellow 18')
    }else{
        next()
    }
}