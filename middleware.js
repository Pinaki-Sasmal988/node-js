module.exports = middleware=((req,res,next)=>{
    if(!req.query.age){
        res.send("Enter Age");
    }else if(req.query.age<18){
        res.send("You are under age");
    }else{
        next();
    }
})