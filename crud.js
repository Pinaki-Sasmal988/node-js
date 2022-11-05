//create,read,update,delete operation
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
const filePath=`${dirPath}/apple.txt`;
//create file
fs.writeFileSync(filePath,'curd operation');
//read file
fs.readFile(filePath,'utf8',(err,files)=>{
    console.log(files);
})
//update file
fs.appendFile(filePath,' and add some text also',(err)=>{
    if(!err) console.log("File updated");
})
//rename operation
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("File name updated");
})
//delete operation
fs.unlinkSync(`${dirPath}/fruit.txt`);