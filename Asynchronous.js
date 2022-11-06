let a=10;
let b=0;
setTimeout(()=>{
    b=20;
},2000)
console.log(a+b);//Here output will be->10. This is the Disadvantage of Asynchronous.
//To solve this problem we will used Promise method.
let waiteData=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(50)
  },2000)
})
waiteData.then((b)=>{
    console.log(a+b);
})