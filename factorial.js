//Write a function to calculate the factorial of a given positive integer.

function isFact(n){
    let result=1;
    for(let i=1; i<=n;i++){
        result*=i
    }
    return result;

}
console.log(isFact(3))