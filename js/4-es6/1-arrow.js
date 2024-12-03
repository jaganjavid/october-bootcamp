

// const sayHello = function(){
//     console.log("Hello");
// }

// Arrow Function

// const sayHello = () => {
//     console.log("Hello");
// }

// One line func does not need a braces

// const sayHello = () => console.log("Hello");

// One line return

// const sayHello = function(){
//     return "Hello";
// }

// const sayHello = () => [];


// Return Object

// const sayHello = () => ({msg:"Hello"});




// const sayHello = function(name){
//     return `Hello ${name}`;
// }

// single params does not need a braces

// const sayHello = name => `Hello ${name}`;

// const sayHello = (name, age) => `Hello ${name} - ${age}`

// console.log(sayHello("Javid", 27));

const users = ["Javid", "Jagan", "Arun"];

// users.forEach(function(user){
//     console.log(user);
// })

// users.forEach((user, index) => {
//     console.log(`${user} - ${index}`);
// })

// Map // return a array

const userWordLength = users.map((user) => {
    return user.length;
})


console.log(userWordLength);