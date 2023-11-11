const getConnection=require('./mongodb');


const insert= async()=>{
 const db=await getConnection();
 const result= await db.insertMany(
    {
        name:'sham',
        brand:'iqoo',
        price:'15000',
        category:'mobile'
    }

 );
 if(result.acknowledged){
    console.log("Data inserted");
 }else{
    console.log("Sorry there have some problem");
 }
}
insert();