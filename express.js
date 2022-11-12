// Route Middleware->Its work single route,group of route or all route. 
const express=require('express');
const middleWare=require('./middleware')
const route=express.Router();
const app=express();
route.use(middleWare);
//app.use(middleWare);-> This is only for Application middleware
app.get('/',(req,res)=>{
    res.send("This is home");
})
app.get('/login',(req,res)=>{
    res.send("This is login");
})
    
// app.get('/login',(req,res)=>{
//     res.send("This is login");  =>This in route single middleware
// })
   
route.get('/about',(req,res)=>{
    res.send("This is about");
})
route.get('/contact',(req,res)=>{
    res.send("This is contact");
})
app.use('/',route);
app.listen(5000);