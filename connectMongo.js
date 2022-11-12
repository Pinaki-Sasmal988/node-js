const getConnection=require('./mongodb');
// getConnection().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// });
//For showing data we can used any one option
const main= async()=>{
    let data=await getConnection();
    data=await data.find().toArray();
console.log(data);
}
main();
