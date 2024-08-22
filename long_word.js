//Write a function that takes a sentence and returns the longest word in it.
// function findLongestWord(sentence){
//     const words=sentence.split(' ');
//     let longestWord="";
   
//     words.forEach(word =>{
//         if (word.length> longestWord.length){
//             longestWord=word;
//         }
//     })
//     return longestWord

// }
// console.log(findLongestWord("I love programming in JavaScript"));

function largestWord(sentence){
    const words=sentence.split(' ');
    let longestWord="";
    words.forEach(word => {
        if (word.length> longestWord.length){
            longestWord=word;
        }
    })
}