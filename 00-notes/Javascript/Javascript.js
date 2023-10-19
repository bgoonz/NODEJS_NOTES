// Javascript is a weakly typed language which means that you don't have to declare the type of a variable when you declare it.

let name = "Bryan";
let age = 27;
let hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        "Name is " +
        userName +
        ", age is " +
        userAge +
        " and the user has hobbies: " +
        userHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));

// Arrow function syntax:

const summarizeUser2 = (userName, userAge, userHasHobby) => {
    return (
        "Name is " +
        userName +
        ", age is " +
        userAge +
        " and the user has hobbies: " +
        userHasHobby
    );
};

console.log(summarizeUser2(name, age, hasHobbies));



const person = {
    name: "Bryan",
    age: 27,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};
// the greet is method syntax which is equivalent to:

const person2 = {
    name: "Bryan",
    age: 27,
    // This needs to be in function syntax because the keyword this will not work in arrow syntax.
    greet: function() {
        console.log("Hi, I am " + this.name);
    }
};

// The keyword this refers to the object that the method is executed from. In this case, it is person.

person.greet()
person2.greet()


// Arrays
const hobbies = ["Sports", "Cooking","Guitar", "Hockey"];
for (let hobby of hobbies) {
    
    console.log(hobby);
}

// Map method
console.log(hobbies.map(hobby => "Hobby: " + hobby));
// Filter mehtod

