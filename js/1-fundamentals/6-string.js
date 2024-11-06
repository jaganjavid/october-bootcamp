

const firstName = "Jagan";
const lastName = "Javid";
const age = 27;


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + " Doe";
// val += " Doe";

val = "Hello , My Name is " + firstName + " " + "and I am " + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
val = firstName[2];

// CharAT()
val = firstName.charAt(2);
val = firstName.charAt(firstName.length - 1)

// Slice
const fruit = "Orange";

val = fruit.slice(1, 4);


const str = "Hello im javid and im a web dev";
const tags = "Wev Dev,UI/UI,App Dev";

// Split

val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("javid", "jagan");

// Include
val = str.includes("app");










console.log(val);
