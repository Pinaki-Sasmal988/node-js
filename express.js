const express=require('express');
const path=require('path');
const data=express();
const dirPath=path.join(__dirname,'public');
// data.get('',(req,res)=>{
//     //console.log(req.query.name);
//     res.send(`
//     <h3>Welcome ${req.query.name} This is home page</h3>
//     <a href="/about">About</a>
//     `);
// });
// data.get('/about',(req,res)=>{
//     res.send(`
//     <h3>Hello,This is about page</h3>
//     <input type="text" value="${req.query.name}">
//     <button>Click</button>
//     <a href="/">Home</a>
//     `);
// });
// data.get('/contact',(req,res)=>{
//     res.send(`[
//     {
//      name:"pinaki",
//      email:"pinaki@gmail.com"     
//     },
//     {
//         name:"peter",
//         email:"peter@gmail.com"     
//        }
//    ]
//     `);
// });
//
 data.use(express.static(dirPath));

//console.log(dirPath);
data.listen(4500);
