const fetchData=new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("data fetched")
    }, 1000)
});
fetchData.then((message) =>{
    console.log(message)
})
