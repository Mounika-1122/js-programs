//Write a function that creates a counter which increments each time it is called.
function createCounter(){
    let count=0;
    return function(){
        count+=1;
        return count;
    }
}
const counter=createCounter();
console.log(counter()); // 1
console.log(counter()); // 2