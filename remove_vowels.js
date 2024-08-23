function remVowels(str){
   
    let vowels='aeiouAEIOU'
    return str.split('')
              .filter(char => !vowels.includes(char))
              .join('')

}
console.log(remVowels("mounika is good"));
