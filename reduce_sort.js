let arr=[
   {item:"chips", price:20},
   {item: "ice-cream", price:40},
   {item: "drink", price: 30}
    
]

const totalCost=arr.reduce((ele, arr) => ele+arr.price, 0);
const sortedItems=arr.sort((a,b) => a.price-b.price);

console.log("Total price: ",totalCost);
console.log("Sorted Items: ",sortedItems);