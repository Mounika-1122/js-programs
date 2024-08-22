//check if a number is prime
// function prime(num){
//     if (num<=1){
//         return false;

//     } 
//     for(let i=2;i<num;i++){
//         if (num%i==0) {
//             return false
//         }
//     }
//     return true;
// }
// console.log(prime(1));

function isPrime(n){
    if(n<=1){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
        return true;
    }
}
console.log(isPrime(1));