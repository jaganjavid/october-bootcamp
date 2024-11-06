


// KEY:VALUE

const person = {
    
    // Properties
    firstName:"Jagan",
    lastName:"Javid",
    age:27,
    email:"jj@gmail.com",
    hadDinner:false,
    hobbies:["music", "Sports"],
    address:{
        city:"Chennai",
        state:"TN",
    },
    // Methods
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }

}


let val;

val = person;

// Get a specific key
val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[1];
val = person.address.city;
val = person.getFullName();



console.log(val);

