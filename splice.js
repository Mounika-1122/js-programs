arr=[1,2,3,4,5,6];
let sliced=arr.slice(1, 6); //slice(strat, end)
console.log(sliced);

//splice(index, howmany, item1,..., itemx);
arr.splice(1,3,"a", "d", "b");
console.log(arr)

//isArray()
let nums=[1,2,3,4];
console.log(Array.isArray(nums))

//find()
const arry=[5,16,9,0,11];
const found= (ele) =>ele > 10;
console.log(arry.findIndex(found))