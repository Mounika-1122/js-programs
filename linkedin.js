function sum(a=5,b=7){
    return a+b;
}
console.log(sum(null, 10));

//anonymous functions
let greet=function (name){
    console.log(`hello ${name}`);
}
greet("mouni")