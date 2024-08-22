function isSorted(str1, str2){

let modified1=str1.toLowerCase().split('').sort().join('')
let modified2=str2.toLowerCase().split('').sort().join('')

console.log(modified1, modified2)
if(modified1===modified2 &&modified1.length===modified2.length){
    return "anagram"
}
else{
    return "no"
}
}

console.log(isSorted("ehllo", "lloeH"));


