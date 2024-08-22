function largeElement(arr){
    const flatArray=arr.flat(Infinity);
    return Math.max(...flatArray);
}
const arr1=[1,2,[70,4],[10,8,11]]
console.log(largeElement(arr1))