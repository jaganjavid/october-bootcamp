

// Two Phases

// 1 - creatation
// 2 - excutation

// Function Statement

// greet("Akash", "Kumar", 30);

function greet(firstName = "John", lastName = "Doe", age){

    // Default Parameter
    // if(typeof firstName === "undefined"){
    //     firstName = "John"
    // } 

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe"
    // } 
    
    console.log(`hello ${firstName} ${lastName} - age ${age}`);
}



// greet("Jagan", "Javid", 27);
// greet("Aurn", "Kumar", 40);

// Hositing

// Function Expression

const add = function(x = 5){
    return x + 5;
}

console.log(add(10));
console.log(add(15));


// An IIFE (immediately invoked function expression)

(function(name){
    console.log(`Hello ${name}`);
})("Jagan");




