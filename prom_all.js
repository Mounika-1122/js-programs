//Promise.all waits for all promises in the array to resolve and then returns an array of their results.
// If any promise rejects, it will catch the error.
const prom1=new Promise((resolve, reject) =>{
    setTimeout(() => resolve("First prom"), 1000)
});
const prom2=new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Second prom"), 2000)
});
const prom3=new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Third prom"), 3000)
});

Promise.all([prom1, prom2, prom3])
     .then(values =>{
        console.log(values)
     })