//Write a function that removes duplicate elements from an array.
function removeDuplicates(arr){
    return [...new Set(arr)]; // '...' creates a new array with those elememts
}

console.log(removeDuplicates([1,2,4,4,7,1,9,9]));

