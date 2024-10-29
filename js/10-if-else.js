

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