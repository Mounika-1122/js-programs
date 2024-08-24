
//Write a function to capitalize the first letter of each word in a sentence.

function capitalizeWords(str){
   return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() +word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello World iam mouni"));
