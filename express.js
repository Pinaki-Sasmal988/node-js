const express=require('express');
const data=express();
data.get('',(req,res)=>{
    //console.log(req.query.name);
    res.send(`
    <h3>Welcome ${req.query.name} This is home page</h3>
    <a href="/about">About</a>
    `);
});
data.get('/about',(req,res)=>{
    res.send(`
    <h3>Hello,This is about page</h3>
    <input type="text" value="${req.query.name}">
    <button>Click</button>
    <a href="/">Home</a>
    `);
});
data.get('/contact',(req,res)=>{
    res.send("Hello,This is contact page");
});
data.listen(5000);
