//commandLine argument import fs->file system (in argv 0 and 1 index by default assume by system)
//file create and remove
const fs=require('fs');
const input=process.argv;
fs.writeFileSync(input[3],input[4])
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])//remove not working(debug)
}else {
    console.log('Invalid Input');
}

