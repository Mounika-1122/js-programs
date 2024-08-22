const slowProm=new Promise((resolve, reject) =>{
    setTimeout(() => resolve("slow prom"), 3000)
})
const fastProm=new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Fast prom"), 1000)
})

Promise.race([slowProm, fastProm])
       .then(message =>{
        console.log(message)
       })