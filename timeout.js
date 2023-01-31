const data = ["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", 
"Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", 
"Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , 
"Butler", "Shirley"];

function displayData(){
    for (const names of data) {
        console.log(names);
    }
}

setTimeout(displayData, 8000);
