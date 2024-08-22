function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    return str
        .split('')                   // Split the string into an array of characters
        .filter(char => !vowels.includes(char)) // Filter out the vowels
        .join('');                   // Join the characters back into a string
}

// Example usage
const inputString = "Hello, World!";
const result = removeVowels(inputString);
console.log(result); // Output: "Hll, Wrld!"
