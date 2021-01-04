var number = 5; // in-line comment ctrl + /
/* This is a 
multiline comment */
number = 9;

// Data type and variable
// undefined, null, boolean, string, symbol, number, and object

// var for any data type, any variable
var myName = "Yupito";
myName = "Yu";

// only in current scope
let ourName = "CMI";

// constant variable
const pi = 3.14159265;

// Declaration and assignment
var a;
var b = 2;
a = 7;
b = a;

console.log(a);

// Declaration and assignment at the same time
var a = 9;

// Initialize variable
var a = 5;
var b = "I'm a";
b = b + " string";

// Case sentitive
// Yupito != YUPITO

var sum = 1 + 12;
var sum = 1 - 12;
var sum = 1 * 12;
var sum = 1 / 12;

var myVar = 10;
myVar++;
myVar--;

var ourDecimal = 5.7;

// 5.0 will be print as 5

var remainder = 11 % 3;

a += 12;
a -= 12;
a *= 12;
a /= 12;

// string with " "

var name = "yu";

var myStr = 'I am "Yupito".';
var myStr2 = 'I am "Yupito".';
var myStr3 = `I am "Yu'pito'".`;

/*
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*/

var yourStr = "I " + "You ";
yourStr += "us";

var length = yourStr.length;

// Index with []
var firstChar = yourStr[0];

// strings are immutable
var hello = "Jello World";
// Can't hello[0] = "H"

var lastChar = yourStr[yourStr.length - 1];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
  return result;
}

// Arrays
var ourArray = ["John", 23];
// Any data type

// Nested Array
var myArray = [
  ["The universe", 10],
  ["Yupito", "Guisella"],
];
ourArray[0];
myArray[1][1];

// Array es mutable
ourArray[0] = "Guisella";

// array.push() for adding element at the end
myArray.push("Amor");

// array.pop() return last element and eliminate that element
myArray.pop(); //should be "Amor"

// array.unshift() for adding elemtn at the beginning
myArray.unshift("Love");

// array.shift() returna first element and eliminate that element
myArray.shift(); //should be ["The universe", 10]

function functionName(parameters) {
  return parameters;
}
functionName("Guisella");

// type of variable
if (typeof myArray != "undefined") {
  console.log("Yes");
}

function fun1() {
  global = 5; // without var keyword, the variable will be global NOT RECOMMENDED
  var local = 5; // with var keyword, the variable will be local
}

var myNum = 5;
function myNum() {
  var myNum = 6;
  console.log(myNum); // will be 6 as local variable dominate global variablem NOT RECOMMENDED
}

var sum = 0;
function addFive() {
  sum += 5;
}

// stand in line
var testArr = [1, 2, 3];
function nextInLin(arr, item) {
  arr.push(item);
}
nextInLine(testArr, 4);
console.log(JSON.stringify(testArr));

var bool = true;
bool = false;

if (bool) {
  return "Yes";
}

var value = 12;
if (value == "12") {
  // == perform type conversion at "12"
  console.log("Yes");
}

// strict equality
if (value === "12") {
  // false, not the same type of variable
  console.log("Yes");
}

10 != 12; // type conversion
10 !== 12; // strict inequality, does not perform typer conversion
10 > 9;
10 < 11;
10 >= 9;
10 <= 11;
if (value <= 10 && value >= 5) {
}
if (value > 10 || value < 5) {
  // Something
} else if (bool) {
  // Something
} else {
  // Something
}

// Switch statement
function caseInSwitch(val) {
  var answer;
  switch (val) {
    case 1: //Strict equality
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
    case 4:
      answer = "gamma / delta";
      break;
    default:
      answer = "None";
  }
}

// Object     ?dictionary?
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};
var legVal = ourDog.legs;
var tailVal = ourDog.tails;
var nameVal = ourDog["name"];

ourDog.friends.push("Guisella");

ourDog.bark = "Wof";
ourDog["owner"] = "Yupito";

delete ourDog.bark;

// Check if the object has specific property
ourDog.hasOwnProperty("legs");

// while loop
myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

// for loop
for (var i = 0; i < 5; i++) {
  myArray.push(i);
}

// Array in JavaScript has .length function
// In contrast to C++

// Do while loop
// At least perform one time

do {
  myArray.push(i);
  i++;
} while (i < 5);

x || y;
// y if x doesn't exist, x otherwise

// Random number 0 <= x < 1
Math.random();
// Random integer 1 <= x < 20
Math.floor(math.random() * 20);

// parseint function, convert string into integer
parseInt("10");
// Radix, base of number: binary for example
parseInt("10001", 2);

// Conditional Operator (Ternary)
// condition ? statement-if-true : statement-if-false
a === b ? "Yupito" : "Guisella";

num > 0 ? "positive" : num < 0 ? "negative" : "zero";

let name = "Guisella";
// let doesn't allow declaring same variable twice

("use strict"); // ????

var Guisella = "Amor";
let Guisella = "Amor";
// var variable declare global variable
// let variable is only declared in the current local scope
// Recommend to use let instead of var

const GUISELLA = "Amor";
// const variable has all the properties of let
// const variable can't not be reassigned
// all capital letter

const s = [5, 7, 2];
s[0] = 2;
s[1] = 5;
s[2] = 7;
// const array / objects can be mutates, not reassigned ??????

Object.freeze(s);
// freeze const object to prevent mutation

// anounymous function ????????
const magic = () => new Date();
const myConcat = (arr1, arr2) => arr.concat(arr2);
myConcat([1, 2], [3, 4, 5]);

// EXTRA arrow function beginning

function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

function isPosi(num) {
  return a > 0;
}

let isPositive = (num) => num > 0;

function randomNum() {
  return Math.random;
}

let random = () => Math.random;

document.addEventListener("click", function () {
  console.log("click");
});

document.addEventListener("click", () => console.log("click"));

// Arrow function use variable form the scope of where the function is defined
// Arrow function does not create own 'this' variable
// Normal funciton redefined the variable within the global scope
// Recommend always use arrow function

// EXTRA arrow function end

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

// rest operator
const sum = function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
};
sum(1, 2, 3);

// spread operator
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1]; // a copy of an array
  arr1[0] = "patato";
})();

arr2 = arr1; // is allows to copying array with =
// works like python that multiple variables referring to the same object
// and changing one variable affect the other one

// Destructuring assignment to assign variables from objects
let voxel = { x: 3.6, y: 7.4, z: 6.54 };
const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURE = {
  today: 77.5,
  tomorrow: 79,
};
const { tomorrow: tempOfTomorrow } = avgTemperatures;

// Destructuring assignment from nested objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};
const {
  tomorrow: { max: maxOfTomorrow },
} = LOCAL_FORECAST;

// Destructuring assignment from array
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // z = 1, x = 2, y = 4

let a = 8,
  b = 6;
(() => {
  [a, b] = [b, a];
})();

// Destructuring and rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , ...arr3] = source; // copying source to arr3 without the first two elements

// Destructuring Assignment to pass an object as a function's parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2;
  };
})();

// Create Strinmgs using template literals
const person = {
  name: "Yupito",
  age: 19,
};
const greeting = `Hello, my name is ${person.name}!
I ams ${person.age} years old.`;

const createPerson = (name, age, gender) => ({ name, age, gender });
// return object {"name": name, "age": age, "gender": gender}

// Object can contain a function
const bicycle = {
  gear: 2,
  setGear /*:function*/(newgear) {
    "use strict";
    this.gear = newGear;
  },
};

// Class
// new keyword
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle("Jupiter");

// Class object getter setter
class Book {
  constructor(author) {
    this._author = author;
  }
  get writer() {
    return this._author;
  }
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

// Difference between import and require
import { capitalizeString } from "./function";
const cap = capitalizeString("guisella!");

// Export
import { amor } from "./function";

// import entire file
import * as capitalizeStrings from "./function";

// export fallback with export default
// import a default export
import subtract from "./function";
