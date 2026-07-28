const name ="Poojita"
const repoCount = 50

//console.log(name + repoCount + " Value"); 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pooke-mon-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) // slice ka use karke aap negative value le skte ho, substring me nhi le skte
console.log(anotherString);

const newStringOne = "     poojita    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://poojita.com/poojita%20chaturvedi"

console.log(url.replace('%20','-'))

console.log(url.includes('poojita')) //true(aise url ke andar ki value check kr skte hain)
console.log(url.includes('sundar')) //false(ye value nhi thi)

console.log(gameName.split('-'));