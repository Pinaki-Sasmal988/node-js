// Application Middleware 
const express=require('express');
const data=express();

  const setAuth=((req,res,next)=>{
       //console.log('hello middleware');
       if(!req.query.age){
        res.send("Please Enter Your Age");
       }else if(req.query.age<18){
        res.send("Sorry you can't access this site");
       }else{
        next();
       }
       
  })
data.use(setAuth);

data.get('/',(req,res)=>{
    res.send("This is home page");
})
data.get('/login',(req,res)=>{
    res.send("This is login page");
})
data.listen(5000);