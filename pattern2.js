let rows=5;
for(let i=1;i<=rows;i++){
    let rowPattern='';
    for(let j=rows;j>=i;j--){
         rowPattern += "*";
    }
    console.log(rowPattern)
}
