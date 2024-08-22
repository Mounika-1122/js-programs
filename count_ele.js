//Write a function that counts the occurrences of each element in an array and returns an object with the counts.
function countOccurrence(arr){
    return arr.reduce((acc ,value) =>{
        acc[value]=(acc[value] || 0) +1;
        return acc;
    }, {})
}
console.log(countOccurrence(['a', 'b', 'a', 'c', 'b', 'a'])); 