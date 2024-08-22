//Write a function to swap two variables without using a third variable.
function swap(a,b){
    [a,b]=[b,a]
    return [a,b]
}
console.log(swap(1,2))