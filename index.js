let x = new Promise((resolve, reject) =>{
    let a = 2 + 2;
    if(a == 7){
        resolve('The promise was done');
    }else{
        reject("The promise wasn't fulfilled");
    }
})

x.then((message) =>{
    console.log("The promise was succesful");
}).catch((message) =>{
    console.log("This is in the catch section");
})