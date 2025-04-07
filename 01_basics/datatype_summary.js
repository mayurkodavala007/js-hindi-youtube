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


// ****************************************************************************
// stack(primitive) ,heap(non-primitive)

let myYoutubename = "mayurkdavala"
let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "mayur@gmail.com",
    upi: "user@bly"
}
let userTwo = userOne
userTwo.email = "anuj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



