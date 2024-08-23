var rows=5;

for(let i=1;i<=rows;i++){ //controls number of rows
    let rowPattern="";
    for(let j=1;j<=i;j++){ //controlls no. of asterisks, no. of asterisks inceases with each row
        rowPattern+="*"
    }
    console.log(rowPattern)
}