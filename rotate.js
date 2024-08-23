//rotation of arrays
function rotateArr(arr, positions){
    positions=positions%arr.length;
    return arr.slice(-positions).concat(arr.slice(0, -positions)); //right rotation
    //for left rotation its "positions"

}
const array=[1,2,3,4,5];
const position=3;
const rotatedArr=rotateArr(array, position);
console.log(rotatedArr)


