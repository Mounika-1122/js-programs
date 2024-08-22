const myProm=new Promise((resolve, reject) =>{
    resolve(10);
});

myProm
.then(value =>{
    console.log("First then: ",value);
    return value*2;
})
.then(newValue =>{
    console.log("Second then: ", newValue);
    return newValue*3;
})
.then(finalValue =>{
    console.log("Third then: ", finalValue);
})