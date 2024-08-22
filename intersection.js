//find intersection of two arrays
//The intersection of two arrays is a new array containing only the elements that are present in both arrays.
// let arr1=[1,2,6,3];
// let arr2=[6,2,9];
// let result=arr1.filter(value => arr2.includes(value))
// console.log(result);

//by functions

function something(arr1,arr2){
    return arr1.filter(value=> arr2.includes(value));
}
console.log(something([1,2,3], [2,7,3]))