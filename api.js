const express=require('express');
const getConnection=require('./mongodb');
const mongodb=require('mongodb');
const data=express();

data.use(express.json());//This is used take value from body(api testing)

data.get('/',async(req,res)=>{
    const db=await getConnection();
    const result=await db.find().toArray();
    res.send(result);
    console.log(result);
});
data.post('/',async(req,res)=>{
    let db=await getConnection();
    let result=await db.insertOne(req.body);
    res.send(result);
    if(result.acknowledged){
        console.log("Data inserted");
    }else {
        console.log("Sorry");
    }
});
data.put('/:name',async(req,res)=>{
    let db=await getConnection();
    let result= await db.updateOne(
        // {name:"subhajit"},{$set:{price:'100'}} this is for dummy testing
        // {name:"subhajit"},{$set:req.body}
        // {name:req.body.name},{$set:req.body}
        {name:req.params.name},{$set:req.body}//This is query param technic
    );
    res.send(result);
    if(result.acknowledged){
        console.log("Data updated");
    }else {
        console.log("Sorry");
    }
});
data.delete('/:id',async(req,res)=>{
    let db=await getConnection();
    let result=await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    //console.log(result);
    res.send(result);
    if(result.acknowledged){
        console.log("Data deleted");
    }else {
        console.log("Sorry");
    }
})

data.listen(5000);