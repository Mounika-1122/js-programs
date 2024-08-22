function removeFalsy(arr){
    return arr.filter(Boolean)

}
console.log(removeFalsy([1,false,true,"mo", null, '']));
