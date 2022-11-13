const getConnection=require('./mongodb');

const update=async()=>{
  const db=await getConnection();
   const result=await db.updateMany(
    {name:'deba'},
    {$set:{price:1200}}
   );
   if(result.acknowledged){
    console.log("data updated");
   }else{
    console.log("Sorry");
   }
}
update();