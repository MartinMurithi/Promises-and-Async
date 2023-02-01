//Demo on how to use callbacks

//Download a pic from server then process it

// function processPic(){

//     setTimeout(()=>{
//         console.log("Processing the image.....");
//     }, 2000);
    

// }


// function downloadPic(url, callback){
//     //script to download the image
//     setTimeout(()=>{
//         console.log('Downloading picture.......');//after downloading the img, func process is called
//         callback();
//     }, 1000);
    
// }

// downloadPic("url", processPic);


// /**
//  * We will pass process pic as a parameter and execute it after the download is 
//  * complete.
//  */

//Check for even numbers before displaying them

const data = [12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10];
let evenNumbers = [];
let oddNumbers = [];

function isOdd(){
    for(let x of data){
        if(x % 2 == 1){
            oddNumbers.push(x);
            console.log(x);
        }  
    }  
}

function isEven(){
    for(const y of data){
        if(y % 2 == 0){
            evenNumbers.push(y);
            console.log(y);
        }
    }
    
}

function displayData(callback1, callback2){
    setTimeout(() => {
        console.log("Odd numbers include : ");
        callback1();

        console.log("Even numbers include : ");
        callback2();
    }, 2000);
}

displayData(isOdd, isEven);