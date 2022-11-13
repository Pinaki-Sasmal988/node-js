const getConnection=require('./mongodb');


const insert= async()=>{
 const db=await getConnection();
 const result= await db.insertMany(
    [{
        name:'deba',
        brand:'redmi',
        price:'15000',
        category:'mobile'
    },{name:'subhajit',brand:'kgf',price:'12000'}
]
 );
 if(result.acknowledged){
    console.log("Data inserted");
 }else{
    console.log("Sorry there have some problem");
 }
}
insert();