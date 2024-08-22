// function toTitleCase(str) {
//     return str
//     .toLowerCase()                    
//     .split(' ')                      
//     .map(word =>                      
//         word.charAt(0).toUpperCase() + word.slice(1) 
//     )
//     .join(' ');                     
// }

// console.log(toTitleCase("hello world")); 


function titleCase(str){
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
    .join(' ')
}
console.log(titleCase("hello, WOrld"))