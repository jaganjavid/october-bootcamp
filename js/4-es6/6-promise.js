
const posts = [
    {title:"Post one", body:"This is a post one"},
    {title:"Post two", body:"This is a post two"},
];


function createPost(post){

    return new Promise(function(resolve, reject){


        setTimeout(() => {

            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else {
                reject("Error : Something went worng");
            }


        }, 2000);
         
    })

}


function getPosts(){

    setTimeout(function(){

        let output = "";

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })

        document.body.innerHTML = output;

    }, 1000);


}


createPost({title:"Post Three"})
.then(getPosts)
.catch(function(err){
    document.body.innerHTML = err;
});


// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));