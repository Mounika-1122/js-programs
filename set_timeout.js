const myProm=new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("msg shown after 2s")
    }, 2000)
});

myProm.then(message =>{
    console.log(message)
})