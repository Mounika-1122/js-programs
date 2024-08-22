function evenOdd(arr){
    let even=[];
    let odd=[];
    for(let num of arr){
        if (num%2===0){
            even.push(num)
        }
        else{
            odd.push(num)
        }
    }
    return {even, odd}
}
let numbers=[1,2,3];
const {even, odd}=evenOdd(numbers);
console.log("even is", even);
console.log("odd is", odd);
