//reverse a string using functions

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Hello"))

//without using reverse() method

function revString(str){
    let reversed="";
    for(let i=str.length-1;i>=0; i--){
        reversed+=str[i];
    }
    return reversed;
}
console.log(revString("mouni"));