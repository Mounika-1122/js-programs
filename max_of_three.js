let arr=[23,85,92,11];
console.log(Math.max(...arr)); //The spread operator (...) spreads out the elements of arr individually


//using functions
function big(a,b,c){
    return Math.max(a,b,c)
}
console.log(big(29,70,55))