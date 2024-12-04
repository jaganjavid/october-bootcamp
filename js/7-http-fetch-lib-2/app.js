

const http = new OurHttp();


// Get user

http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err))



const user = {
    name:"Jagan Javid",
    username:"jagan_javid",
    email:"jj@gmail.com"
}

http.post("https://jsonplaceholder.typicode.com/users", user)
.then(data => console.log(data))
.catch(err => console.log(err))


http.put("https://jsonplaceholder.typicode.com/users/6", user)
.then(data => console.log(data))
.catch(err => console.log(err))

http.delete("https://jsonplaceholder.typicode.com/users/8")
.then(data => console.log(data))
.catch(err => console.log(err))