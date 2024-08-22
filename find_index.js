//find index of specific element in an array
function findIndx(arr, ele){
    for(let i=0; i<arr.length;i++){
        if (arr[i]===ele){
            return i;
        }      
    }
    return -1;
}
let nums=[1,2,3,4];
console.log(findIndx(nums, 3));
