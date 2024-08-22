
    let arr=[
        {age:20,name:"Mouni"},
        {age:25, name:"Akarsh"},
        {age: 18,name:"Teja"}
    ]
    
     arr.sort((a,b) => a.name.localeCompare(b.name))//compaing by string
     console.log(arr)
