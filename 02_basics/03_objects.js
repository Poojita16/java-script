// singleton
// object.create

// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Poojita",
    "full name" : "Poojita Chaturvedi",
    [mySym]: "mykey1",
    age:  21, 
    location: "Varanasi",
    email: "poojita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "poojita@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="poojita@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());