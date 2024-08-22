//object to query string
function toQueryString(obj) {
    return Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
}

const query = { name: "Mouni", age: 19 };
console.log(toQueryString(query)); 
// Output: "name=Mouni&age=19"
