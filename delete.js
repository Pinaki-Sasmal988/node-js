const getConnection=require('./mongodb');

const deleteData=async()=>{
  const db=await getConnection();
   const result=await db.deleteOne(
    {name:'deba'}
   );
   console.log(result);
   if(result.acknowledged){
    console.log("data deleted");
   }else{
    console.log("Sorry");
   }
}
deleteData();