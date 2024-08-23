//Write a function that takes a sentence and returns the longest word in it.

function findLongestWord(str) {
    // Split the input string into an array of words
    const words = str.split(' ');

    // Initialize a variable to keep track of the longest word
    let longestWord = '';

    // Iterate through the words array
    for (let word of words) {
        // If the current word is longer than the longestWord, update longestWord
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Return the longest word
    return longestWord;
}

// Example usage:
const inputString = "hi akarshi mouni mounika you are moukika hi";
console.log(findLongestWord(inputString)); // Output: "quick"
