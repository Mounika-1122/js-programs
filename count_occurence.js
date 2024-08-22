//count occurences of each character in a string

// function countOccurence(str){
//     let count={};
//     for(let char of str){
//         count[char]=(count[char] || 0) +1;
//     }
//     return count;
// }
// console.log(countOccurence("HELLOO"));

function countOccurence(str){
    let count={};

    for(let char of str){
        count[char]=(count[char] ||0)+1;
    }
    return count;

}
console.log(countOccurence("Mouniiimo"))