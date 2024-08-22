//find min, max numbers of an array

// let arr=[5,8,0];
// let min=Math.min(...arr);
// let max=Math.max(...arr);
// console.log([min,max])

//without built-in functions
function minMax(arr){
    if (arr.length===0){
        throw new Error("Array is empty")
    }

    let min=arr[0];
    let max=arr[0];
    for(let i=1;i<arr.length; i++){
        if (arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return {min,max}
}
const nums=[1,7,9,0,5];
const {min,max}=minMax(nums);
console.log("min is", min);
console.log("max is", max);