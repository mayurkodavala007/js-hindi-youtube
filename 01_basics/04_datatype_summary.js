// primitive

// 7 type : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 9016856557998916050n


//reference (non-primitive)

//Array, Objects, Functions

const heros = ["krish","nagraj","doga"];
let myObj ={
    name: "mayur",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof anotherId);


//********************************************************************/
// stack(primitive), heap(non-primitive)

let myInstagrammId = "mayur._.18_"

let anothername = myInstagrammId
anothername = "mayurkodavala"

console.log(myInstagrammId);
console.log(anothername);

let userOne = {
    email: "mayurkodavala57@gmail.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "mayur@google.com"

console.log(userOne.email);
console.log(userTwo.email);



