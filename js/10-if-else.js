

// if(something){
//     do something
// } else {
//     do something else
// }


const id = 100;

// Equal to value

if(id == "100"){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// Not equal to value

if(id != "100"){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// Equal to value and type

if(id === 100){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// Not equal to value and type

if(id !== "100"){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// Test if undefined

let greet = "vanakam";

if(typeof greet === "undefined"){
    console.log(`I don't have a value (${greet})`)
} else{
    console.log(`I have a value (${greet})`);
}

// Greater or less than

if(100 >= 99){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

if(100 <= 99){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// else if

const color = "green";

if(color === "red"){
    console.log(`${color}`)
} else if(color === "blue"){
    console.log(`${color}`);
} else{
    console.log("I don't know the color");
}

// Logical Operator

// AND - && check both the vlaue

const name = "Javid";
const age = 30;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <=19){
    console.log(`${name} is a teen`);
} else {
    console.log(`${name} is a adult`);
}

// OR - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run the race`);
} else {
    console.log(`${name} can run the race`);
}

// Ternary Operator

console.log(100 === 100 ? "correct" : "Incorrect");