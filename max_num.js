// //find maximum number in an array
// let arr=[27,98,44];
// arr.sort((a,b) => a-b);
// console.log(arr.at(-1))



// //SECOND METHOD

// function findMax(arr){
//     return Math.max(...arr)
// }
// console.log(findMax([13,64,0,77]))

//THIRD METHOD
function maxNum(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        
    }
    return max;
}
console.log(maxNum([1,2,39,7,64]))