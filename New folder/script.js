
// Access a Property with .
/* 

const person={
    firstname:'Javad',
    lastname:'Saboori',
    age:37,
    eyecolor:'brun'
};


document.getElementById('demo').innerHTML= person.firstname  +  'is'  +  person.age + 'years old.';


// Access a Property with []
const person={
 firstname: 'Javad',
 lastname: 'Saboori',
 age: 37,
 eyecolor:'brun',
};

document.getElementById('demo').innerHTML = person['firstname'] + person ['lastname'] + 'is' +  person['age'] +  'Years old.';
 

// Accessing a Property with an Expression

const person={
    firstname: 'Javad',
    lastname: 'Saboori',
    age: 37,
    eyecolor: 'brun',
    haircolor:'black',
};
let x='firstname';
let y='age';

document.getElementById('demo').innerHTML= person[x ] + 'is' + person[y]+ 'years old.'

// Deleting a property

const person={
    firstname: 'Javad',
    lastname: 'Saboori',
    age: 37,
    eyecolor: 'brun',
    haircolor:'black',
};

delete person.age;


document.getElementById("demo").innerHTML =
person.firstname + " is " + person.age + " years old.";


// Object Methods

const person = {
    firstName: "Javad",
    lastName: "Saboori",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  document.getElementById("demo").innerHTML = person.fullName();
  

  //Adding a Method


  // Create an Object
const person = {
    firstName: "Javad",
    lastName: "Saboori",
    id: 5566,
  };
  
  // Add a Method
  person.name = function() {
    return this.firstName + " " + this.lastName;
  };
  
  // Display Object Data
  document.getElementById("demo").innerHTML =
  "My father is " + person.name(); 
  
 */

  /* 
  //   How to Display JavaScript Objects?/ Create an Object
const person = {
    name: "Javad",
    age: 37,
    city: "Norrköping"
  };
  
  // Display Object
  document.getElementById("demo").innerHTML = person;
 

  //  Displaying Properties/Create an Object
const person = {
    name: "Javad",
    age: 37,
    city: "Norrköping"
  };
  
  // Display Properties
  document.getElementById("demo").innerHTML = person.name + ", " + person.age + ", " + person.city;
   

  // Displaying Properties in a Loop / Create an Object
const person = {
    name: "Javad",
    age: 37,
    city: "Norrköping"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };
  
  // Display the Text
  document.getElementById("demo").innerHTML = text;



  // The Object.values() Method / Create an Object

const person = {
  name: "Javad",
  age: 37,
  city: "Norrköping"
};

// Create an Array
const myArray = Object.values(person);

// Display the Array
document.getElementById("demo").innerHTML = myArray;



//Using Object.entries() / The Object.entries() Method

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

document.getElementById("demo").innerHTML = text;

 */

//  Display Properties with JSON / Create an Object
const person = {
    name: "Javad>",
    age: 37,
    city: "Norrköping"
  };
  
  // Display JSON
  document.getElementById("demo").innerHTML = JSON.stringify(person);
 

 