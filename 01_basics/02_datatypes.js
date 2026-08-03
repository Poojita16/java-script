"use strict";//treat all JS code as newer version of JS

//alert(3 + 3)// we are using nodejs, not browser

console.log(3 
    +
     3)// code readability should be high (mtlb aap aise code likho ki dusre developer ko samajhne me dikkat na ho)

console.log("Poojita") 


let name = "Poojita"
let age = 21
let isLoggedIn = false
let state;


//premitive datatypes in JS
//number => 2 to the power of 53(mtlb number ka ek range hai, usse zyada number ko represent nahi kar sakte)
//bigint => larger than 2 to the power of 53(mtlb number ka ek range hai, usse zyada number ko represent karne ke liye bigint ka use karte hai)
//string => any text inside single or double quotes("Poojita" or 'Poojita')
//boolean => true or false
//null => empty value(standalone value)
//undefined => value is not assigned yet
//symbol => unique value which cannot be changed(mtlb ek hi value ko baar baar use nahi kar sakte, har bar nayi value create hoti hai)



//non-premitive datatypes in JS
//object => key-value pair, used to store multiple values in a single variable(mtlb ek hi variable me multiple values store karne ke liye object ka use karte hai)

console.log(typeof"Poojita");
console.log(typeof age);
console.log(typeof undefined);