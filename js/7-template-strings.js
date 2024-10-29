

const name = "Javid";
const age = 27;
const job = "Web dev";
const city = "Chennai";


let val;

// Without Template Strings

// val = "My name is" + " " + name + " " + "im " + " " + age + " " + "and my job is" + " " + job + " coming from" + " " + job;

// with template Strings

val = `My name is ${name} im ${age} and my job is ${job} coming from ${city}`;


console.log(val);