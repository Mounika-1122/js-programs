//Calculate the Sum of Digits in a Number

function sumOfDigits(num){
    return num
    .toString()
    .split('')
    .reduce((sum, ele) => sum+Number(ele), 0)

}
console.log(sumOfDigits(1234))