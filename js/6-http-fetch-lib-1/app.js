

const http = new OurHttp();


http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));

// user Data

const data = {
    name:"Jagan Javid",
    username:"jagan_javid",
    email:"jj@gmail.com"
}

http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));


http.put("https://jsonplaceholder.typicode.com/users/5", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/8")
.then(data => console.log(data))
.catch(err => console.log(err));
