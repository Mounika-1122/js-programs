
function toUpper(arr){
    let upper=[]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        upper.push(arr[i].toUpperCase()) ;
       
    }
    return upper;
}

console.log(toUpper(["apple", "banana"]));