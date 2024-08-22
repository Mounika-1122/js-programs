//generate a random password
function generatePasswod(length){
    let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password='';

    for(let i=0;i<length; i++){
        const randomIndex=Math.floor(Math.random()* characters.length);
        password+=characters[randomIndex];
    }
    return password;
}
console.log(generatePasswod(9));

//amstrong, palindrome, fibonacci
