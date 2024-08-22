//Write a function to find the second largest number in an array.
let arr=[17,9,76,99];
arr.sort((a,b)=> b-a);
console.log(arr.at(1));

function largeNum(arr){
    let max=arr[0];
    let sec_max=arr[0];
    for (let i=0;i<arr.length;i++){
        if(arr[i]> max){
            sec_max=max;
            max=arr[i]
        }
        else if(arr[i]> sec_max){
            sec_max=arr[i]
        }
    }
    
    return sec_max;
}
console.log(largeNum([67,9,56,97,34,14]))