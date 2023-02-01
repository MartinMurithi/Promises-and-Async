//Basically, it handles promises they it just sounds, a func waaits for another func to complete before executing

//call API 

//async makes a function return a promise
//await, makes a function wait for a promise

const body = document.body;
const display = document.querySelector(".list_data");
const apiLink = "http://dummyjson.com/products";
const error = "An error occurred when fetching data";

async function fetchData(url){
    //convert data to json
    let res;
    let data;
    try{
      res = await fetch(url);
      data = await res.json();
    }catch(error){
      alert(error
        )
    }
    data.products.forEach(product => {
      console.log(product);

      display.innerHTML += `
    <li> 
      <div class='prod' class = "product_img">
        <img class = "prod_img" src="${product.images[0]}" alt="An image of Samsung universe 9" />
      </div>

      <div product_info>
        <h3> ${product.title}</h3>
        <p>${product.description}</p>
        <h3>Price:$${product.price}</h3>
      </div>
    
    </li>` 
    });
}
fetchData(apiLink);

//Since the async func returnsa promise, when calling, use then 