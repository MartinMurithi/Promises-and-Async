fetch("https://dummyjson.com/products")
//.then(res=> console.log(res))//checks if api is okay

.then(res => res.json())//converts res to json format, makes another promise, hence another then
.then(data => console.log(data))
.catch(error => console.log("An error occured when loading API"));