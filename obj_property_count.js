//Write a function that counts the number of properties in an object.
function countProps(obj){
    return Object.keys(obj).length;
}
const person={ name: "Mouni", age:19, city:"kkd", study:"btech"};
console.log(countProps(person))