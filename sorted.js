//check if an array is sorted
function sorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if (arr[i]>arr[i+1]){
            return false
        }
    }
    return true;
}
console.log((sorted([4,9,5,1])));
console.log((sorted([1,2,6])));