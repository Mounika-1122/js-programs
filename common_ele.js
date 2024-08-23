let arr1=[1,2,4,5];
let arr2=[3,4];
let arr3=arr1.concat(arr2);
for(let char of arr3){
    let i=0;
    if(arr3[i]==char){
          console.log(i);
          i++;
    }
}
