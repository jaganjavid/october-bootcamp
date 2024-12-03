

// ES5


// Functiom=n Contructor

// function Person(firstName, lastName){

//     // Property
//     this.firstName = firstName;
//     this.lastName = lastName;

//     // method
//     this.fullName = function(){
//        return `${this.firstName} ${this.lastName}`;
//     }

//     this.test = function(){
//         console.log(this);
//     }

// }

// const javid = new Person("Jagan", "Javid");
// const aurn = new Person("Aurn", "Kumar");

// console.log(aurn.firstName);
// console.log(aurn.lastName);
// console.log(aurn.fullName());
// aurn.test();

// ES6

class Person{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}


const jagan = new Person("Jagan", "Javid");

console.log(jagan.firstName);