const myPromise=new Promise((resolve, reject) =>{
    let isSuccess=false;
    if(isSuccess){
        resolve("Sucessful")
    }
    else{
        reject("Rejected")
    }
})

myPromise
.then(message =>{
    console.log(message)
})
.catch(message =>{
    console.log(message)
})