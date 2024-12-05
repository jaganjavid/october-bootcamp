

document.querySelector("#button-1").addEventListener("click", getText);

document.querySelector("#button-2").addEventListener("click", getJson);

document.querySelector("#button-3").addEventListener("click", getExternalData);


function getText(){
    fetch("text.txt").then(function(response){
        return response.text()
    }).then(function(data){
        document.querySelector("#output").innerText = data;
    }).catch(function(err){
        console.log(err);
    })
}


function getJson(){
    fetch("posts.json").then(response => response.json())
    .then(data => {
        let output = "";

        data.forEach((post) => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output;
    }).catch(function(err){
        console.log("Some this went worng");
    })
}

function getExternalData(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then(data => {
        let output = "";

        data.forEach((user) => {
            output += `<li>${user.username}</li>`
        })

        document.querySelector("#output").innerHTML = output;
    }).catch(function(err){
        console.log("Some this went worng");
    })
}


