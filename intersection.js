//find intersection of two arrays


// function something(arr1,arr2){
//     return arr1.filter(value=> arr2.includes(value));
// }
// console.log(something([1,2,3], [2,7,3]))

function something(arr1, arr2){
    return arr1.filter(char =>arr2.includes(char));
    
}
console.log(something([1,2,3],[5,0,8,2]))