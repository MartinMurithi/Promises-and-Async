const data = ["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", 
"Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", 
"Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , 
"Butler", "Shirley"];

function getData(){
    for (const names of data) {
        console.log(names);
    }
}

setTimeout(getData, 2000);

// // setTimeout(() => {
//     for(let x of data){
//         console.log(x);
//     }
// }, 2000);
