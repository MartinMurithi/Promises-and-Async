
// //mimic how blogs fetch articles from the server

//posts acts as our server
const posts = [
    {title: "Post 1", body:"This is article one"},
    {title:"Post 2", body:"This is article two"}
];

function getPosts(){
    let output = '';
    setTimeout(() => {
        for(const post of posts){
            output += `<li>${post.title}</li>`
            
        }
    document.body.innerHTML = output;
    console.log(output);
    }, 1000);
}

function createPost(post, callback){
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
  return post;
}

//The newly created task will not be displayed because it takes 2 secs to 
//execute while the display function takes a sec, hence the DOM will already
//be painted, this is where callbacks functions come in.


/**
 * A callback function, is afunctions that can't run before a specific task completes execution
 * but runs after the executing task is completed
 */

createPost({ title:"poast 3", body:"Body 3" }, getPosts);



















// let displayItems = document.querySelector("#list");

// fetch("https://dummyjson.com/products")
//    .then(function(promises) {
//     promises.json()
//     .then(promise=> console.log(promise))

//    })
//      .then(function(response){
//     response.products.forEach(function(product) {
//      console.log(response);
//      displayItems.innerHTML += `
//      <li>
//      <img src="${product.images[3]}" alt="" />
//        <h3>${product.title}</h3>
//          <p>${product.description}</p>
         
//              </li>
//        ` 
//                 });
                
//             }) 
//             .catch(function(error) {
//                 console.log("Promise not parsed to JSON");
//     })
//     .catch(function(error) {
//         console.log(error);
//    }
// );
