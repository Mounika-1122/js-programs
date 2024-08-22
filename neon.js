
function neonNum(num){
   let square=num*num;
   let sumOfDigits=square
   .toString()
   .split('')
   .reduce((sum,ele) => sum+Number(ele),0)
   return num===sumOfDigits
}
console.log(neonNum((10)))
console.log(neonNum((9)))