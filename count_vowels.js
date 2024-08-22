//Write a function that counts the number of vowels in a given string.

function add(str){
    let count=0;
    let vowels='aeiouAEIOU'
    for(let i=0;i<str.length;i++){
        // console.log(str[i])
        if(vowels.includes(str[i])){
            count+=1;
        }
    }
    return count;
}
console.log(add("Mouiniika"))