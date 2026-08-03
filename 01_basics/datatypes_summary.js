// Primitive data types in JS

// 7 types: String, Number, Boolean, Null, Undefined,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);


// const bigNumber = 1223455678899668n



// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Poojita",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);





//++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack vs Heap memory

//Stack(primitive), Heap(Non-primitive)

let myYouTubename = "Poojitachaturvedidotcom"

let anotherName = myYouTubename
anothername = "poojitalost"
console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "poojita@google.com"

console.log(userOne.email);
console.log(userTwo.email);