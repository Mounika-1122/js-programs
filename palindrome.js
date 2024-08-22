//Write a function that checks if a given string is a palindrome

function isPalindrome(str){
    const reversed=str.split('').reverse().join('')
    return reversed===str
}
console.log(isPalindrome("mam"))