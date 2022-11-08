const { response } = require('express');
const express=require('express');
const path=require('path');
const data=express();
const dirPath=path.join(__dirname,'public');
 /*How to remove extention name from URL and also set page not found*/ 
//data.use(express.static(dirPath));

data.set('view engine','ejs');
data.get('/profile',(req,res)=>{
    const value={
        name:"pinaki",
        city:"kolkata"
    }
    res.render('profile',{value});
});
// data.get('/home',(req,res)=>{
//     res.sendFile(`${dirPath}/home.html`);
// });
// data.get('/about',(req,res)=>{
//     res.sendFile(`${dirPath}/about.html`);
// });
// data.get('*',(req,res)=>{
//     res.sendFile(`${dirPath}/404error.html`);
// });
 data.listen(5000);
