// program to remove maximum and minimum numbers of an array and remaining elements
let arr=[1,7,9,3,8];
arr.sort((a,b) => a-b);
console.log(arr);
arr.shift();
arr.pop();
sum=0
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}
console.log(sum)