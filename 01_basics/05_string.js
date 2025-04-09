const name = "mayur"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String('mayur-kb-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "    mayur    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mayur.com/mayur%18kodavala"
console.log(url.replace('%18','_'));

console.log(url.includes('mayur'));

console.log(gameName.split('-'));









// node 01_basics/05_string.js