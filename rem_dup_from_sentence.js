function removeDuplicates(str){
   const words= str.split(' ');
   const uniqueWords=new Set(words);
   return Array.from(uniqueWords).join(' ');
   

}
console.log(removeDuplicates("hi iam hi"))