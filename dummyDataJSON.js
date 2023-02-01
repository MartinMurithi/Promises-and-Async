const API = "https://dummyjson.com/products";
const error = "An error occured when loading API";
const list = document.querySelector(".list");

fetch(API)
   .then((promise)=> {
    promise.json()
     .then((response)=>{
    response.products.forEach((product)=> {
     console.log(product);
     list.innerHTML += `
    <li> 
        <img src="${product.images[2]}" alt="" />
        <h3> ${product.title}</h3>
        <h3>Price:$${product.price}</h3>
        <p>${product.description}</p>
    </li>` 
            });
                
            }) 
            .catch(function(error) {
                console.log("Promise not parsed to JSON");
    })
    })
    .catch(function(error) {
      console.log(error);
   })

