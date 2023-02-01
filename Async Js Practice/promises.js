//Used to handle async tasks.

//Allow user to share a file downloaded from the server
//Download should be complete before allowing user to share

function download(){
    console.log("Downloading file....");
}


let q = new Promise((resolve, reject)=>{
        const downloadComplete = true;

        if(downloadComplete != true){
            resolve(download)
        }else{
            reject("Error occured when downloading file");
        }
    }).then(()=>{
        download();
    }).catch((error)=>{
        console.log(error);
    });