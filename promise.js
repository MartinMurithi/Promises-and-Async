
const data = ["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", 
"Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", 
"Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , 
"Butler", "Shirley"];

//const data = [];

function displayData(){
for (const names of data) {
    console.log(names);
}
}

let promise = new Promise((resolve, reject) =>{
if(data.length != 0){
    resolve(displayData());
}else{
    reject("List of names is empty");
}
});

promise.then(()=>{
console.log("All names were displayed");
}).catch(()=>{
console.log("Names lists was empty");
});
