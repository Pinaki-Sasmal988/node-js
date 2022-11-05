//  const http=require('http');
//  const data=require('./data');
//  http.createServer((req,resp)=>
//  {
//    resp.writeHead(200,{'Content-type':'application\json'});
//    resp.write(JSON.stringify(data));
//    resp.end();
//  }).listen(5000);
//create file using loop
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
//console.log(dirpath);
for(var i=0;i<5;i++){
  fs.writeFileSync(dirPath+"/apple"+i+".txt","This file created by looping");
 // fs.writeFileSync(`apple${i}.txt`,"This file created by looping");

}
//show file list
fs.readdir(dirPath,(err,files)=>{
  // console.log(files);
  files.forEach((item)=>{
    console.log(item);
  })
})