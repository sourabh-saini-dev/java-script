
     

        fetch("https://jsonplaceholder.typicode.com/users")

        .then((res)=>  res.json())
        .then((data)=> {
            localStorage.setItem("user", JSON.stringify(data))
             console.log("data save successfully")
        })

        .catch((err)=> console.log(err))