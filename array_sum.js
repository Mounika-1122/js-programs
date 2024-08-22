//Write a function that calculates the sum of all numbers in an array.
function add(arr){
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;

}
console.log(add([1,2,3,4]))

//using reduce method in a function
function sumArray(arr){
    return arr.reduce((sum,current) =>sum+current, 0);

}
console.log(sumArray([1,2,3,4]))