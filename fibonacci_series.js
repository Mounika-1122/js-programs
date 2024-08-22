//print fibonacci series upto 10
    let a=0;
    let b=1;
    console.log(a);
    console.log(b);
    for (let i=2; i<10; i++){ //The loop starts with let i = 2 because the first two numbers (at index 0 and 1) are already known.
        let temp=a+b;
        console.log(temp)
        a=b;
        b=temp;
    } 
    
   