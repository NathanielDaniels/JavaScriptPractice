//! Javascript Practice

//? Reverse a string
// function reverseString(str) {
//   let splitString = str.split("");
//   console.log(splitString);
//   splitString.reverse();
//   return splitString;
// }
// console.log(reverseString("hello"));

//? check if integer is divisible by five
// function divisibleByFive(n) {
//   if (n % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(divisibleByFive(5));

//? Equality Check

// function equality(value, type) {
//   console.log(typeof value, typeof type);
//   if (value === type) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(equality(NaN, NaN));

//? Word Without First Character

// function newWord(txt) {
//   let newString = txt.substring(1, txt.length);
//   return newString;
// }

// console.log(newWord("woodhog"));

//? Using the && Operator

// function and(a, b) {
//   if (a !== true) {
//     return false;
//   } else if (b !== true) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(and(false, false));

//? Are the Numbers Equal?

// function isSameNum(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isSameNum(8, "8"));

//? Profitable Gamble

// function profitableGamble(prob, prize, pay) {
//   if (prob * prize > pay) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(profitableGamble(0.9, 1, 2));

//? check empty string
// function isEmpty(empty) {
//   if (empty === "") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty(" "));

//? Multiple of 100

// function divisible(a) {
//   if (a % 100 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(divisible(1000));

//? Evaluate an Equation
//! Do not use to evaluate numbers as Javascript does this on its own
// function eq(str) {
//   return eval(str);
// }

// console.log(eq("2+2"));

//? Recursion: Length of a String

// function length(str) {
//   return str.length;
// }

// console.log(length("hello"));

//? Return the Next Number from the Integer Passed

// function addition(num) {
//   return (num += 1);
// }

// console.log(addition(5));

//? Reverse an Array

// function reverse(arr) {
//   return arr.reverse();
// }

// console.log(reverse([5, 4, 3, 2, 1]));

//? Name Greeting!
//* Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

// consthelloName = (name) => `Hello ${name}`;

// console.log(helloName("Nathan"));

//? Using Ternary Operators
// condition ? condition_if_true : condition_if_false

// let yeah_nope = (bool) => {
//   return bool ? "yeah" : "nope";
// };

// console.log(yeah_nope(false));

//? Flip the Boolean

// const flipBool = (bool) => bool ? 0 : 1;

// console.log(flipBool(false));

//? Divides Evenly

// const dividesEvenly = (a, b) => (a % b === 0 ? true : false);

// console.log(dividesEvenly(85, 4));

//? Return Last Element in Array

// const getLastItem = (arr) => arr[arr.length - 1];
//! or
// const getLastItem = (arr) => arr.pop();

// cl(getLastItem([1, 2, 3, 4]));

//? Concatenating Two Integer Arrays

// const concat = (arr1, arr2) => arr1.concat(arr2);
// or
// const concat = (arr1, arr2) => [...arr1, ...arr2];

// console.log(concat([1, 2, 3], [4, 5, 6]));

//? Find the Index (Part 1)

// const search = (arr, num) => {
//   if (!num) {
//     num === -1;
//   }
//   return arr.indexOf(num);
// };

// console.log(search([1, 2, 3], 2));

//? Check if Array contains a Given Number

// const check = (arr, num) => arr.includes(num);

// console.log(check([1, 2, 3], 1));

//? Compare Strings by Count of Characters

// const comp = (str1, str2) => str1.length === str2.length;

// cl(comp("AB", "CDE"));

//? To The Power of ___

// const calculateExponent = (num, exp) => Math.pow(num, exp);

// cl(calculateExponent(5, 5));

//? Find the Bug: Returning the Container

// const getContainer = (item) => {
//   switch (item) {
//     case "bread":
//       return "bag";
//       break;
//     case "beer":
//       return "bottle";
//       break;
//     case "candy":
//       return "plastic";
//       break;
//     case "cheese":
//       return null;
//       break;
//     default:
//       cl("choose Bread, beer, candy or cheese");
//   }
// };

//! or

// function getContainer(product) {
//   return {
//     Eggs: "carton",
//     Milk: "bottle",
//     Bread: "bag",
//     Beer: "bottle",
//     Candy: "plastic",
//     Cheese: null,
//   }[product];
// }

// cl(getContainer("Eggs"));

//? ES6: Destructuring Arrays I

// const arr = [1, 2, 3, 4, 5];

// let [a, b] = arr;

// cl(b);

//? Hiding the Card Number ***********************
//! Important to learn

// const cardHide = (num) => {
//   let last4Digits = num.slice(-4);
//   maskedNumbs = last4Digits.padStart(num.length, "*");
//   return maskedNumbs;
// };

// cl(cardHide("123123123123123"));

//? Find the Index (Part 2)

// const search = (arr, item) => arr.indexOf(item);

// console.log(search([1, 2, 3, 4], 5));

//? Squares and Cubes

// const checkSquareAndCube = ([item1, item2]) =>
//   Math.sqrt(item1) === Math.cbrt(item2);

// cl(checkSquareAndCube([4, 8]));

//? Is the Number Even or Odd?

// const isEvenOrOdd = (num) => (num % 2 == 0 ? "Even" : "Odd");

// cl(isEvenOrOdd(4));
// cl(isEvenOrOdd(3));

//? Is the Last Character an N?

// const isLastCharacterN = (name) => {
//   let arr = name.split("");
//   return arr[arr.length - 1] === "n" ? true : false;
// };

// cl(isLastCharacterN("Nathan"));

//? Extract City Facts

// const cityFacts = (obj) => {
//   return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;
// };

// cl(
//   cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe",
//   })
// );

//? Volume of a Box

// const volumeOfBox = (obj) => {
//   return obj.width * obj.length * obj.height;
// };

// cl(volumeOfBox({ width: 2, length: 5, height: 1 })); // 10

//? Default Mood

// const moodToday = (mood) => {
//   if (mood) {
//     return `Today, I am feeling ${mood}`;
//   } else {
//     return "Today, I am feeling neutral";
//   }
// };

//! or

// const moodToday = (mood) => `Today, I am feeling ${mood || "neutral"}`;

// cl(moodToday("happy"));

//? Concatenate First and Last Name into One String

// const concatName = (firstName, lastName) => lastName.concat(`, ${firstName}`);

// cl(concatName("first", "last"));

//? Is the Word Singular or Plural?

// const isPlural = (word) => word[word.length - 1] === "s";

//! or

// const isPlural = (word) => word.endsWith("s");

//! or

// const isPlural = (word) => word.substring(word.length - 1) === "s";

// cl(isPlural("changes"));

//? Find the Index

// const findIndex = (arr, str) => arr.indexOf(str);

//! or

// const findIndex = (arr, str) => arr.findIndex((val) => val === str);

// cl(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); //2

//? ES6: Destructuring Objects VIII

// const user = {
//   name: "Billy",
//   email: "Billy@example.com",
//   city: "Phoenix",
//   state: "AZ",
//   country: "USA",
// };

// const str = `({ name, email, rest = {city: "Phoenix", state: "AZ", country: "USA"}} = user ).toString()`;

//! or (Better)

// const str = `({ name, email, ...rest} = user ).toString()`;

// cl(str);

//? Map out an array(10) of random numbers from (1-200)
//! Sort Array from lowers to highest.

// let eggsInNest = new Array(10).fill(null);
// eggsInNest = eggsInNest.map(() => Math.floor(Math.random() * 200) + 1);
// cl(eggsInNest);
// eggsInNest.sort((a, b) => a - b);
// cl(eggsInNest);

//? Map an array that doubles the output of the array

// let arr = [1, 2, 3, 4, 5];

// let mapped = arr.map((x) => {
//   return x * 2;
// });

// cl(mapped);

//? Create an array of null values, replace null with random numbers.

// let newArray = new Array(5).fill(null);
// cl(newArray);

// newArray.map((item) => {
//   item = Math.floor(Math.random() * 100) + 1;
//   newArray.push(item);
//   newArray.splice(0, newArray.length - 5);
// });
// cl(newArray);

//?

// let h1 = document.querySelector("h1");
// let inner = h1.innerHTML;
// cl(h1.textContent);
// cl(inner);

//? ------ Free Code Camp ------
//? Working with Objects

// function phoneticLookup(val) {
//   let result = "";
//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   };

//   result = lookup[val];
//   return result;
// }

// phoneticLookup("charlie");
// console.log(phoneticLookup("charlie"));

//? Testing Objects for PropertiesPassed

// function checkObj(obj, checkProp) {
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
// }

// var obj1 = {
//   top: "hat",
//   bottom: "pants",
// };

// console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"));

//? Record Collection
//! This was not as easy as I thought. Need to work on Objects more

// const collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     album: "ABBA Gold",
//   },
// };

// Only change code below this line
// function updateRecords(id, prop, value) {
//   id = collection[id];

//*  --- My Way ---
// if (prop !== "tracks" && value !== "") {
//   id[prop] = value;
// } else if (prop === "tracks" && value !== "") {
//   id.hasOwnProperty("tracks") ? id.tracks.push(value) : (id.tracks = [value]);
// } else if (prop === "tracks" && value === "") {
//   delete id[prop];
// } else if (prop === "artist" && value === "") {
//   delete id[prop];
// } else if (prop === "album" && value !== "") {
//   id[prop] = value;
// }

//*  --- Cleaner way ---
// if (value === "") {
//   delete id[prop];
// } else {
//   if (prop !== "tracks") {
//     id[prop] = value;
//   } else {
//     id.hasOwnProperty("tracks")
//       ? id.tracks.push(value)
//       : (id.tracks = [value]);
//   }
// }

//   return collection;
// }

//*  --- Testing ---
// updateRecords(5439, "tracks", "ABBA");
// console.log(updateRecords(5439, "artist", "ABBA"));
// console.log(updateRecords(5439, "tracks", "Take a Chance on Me")); //'Take a change on me' (last element)
// console.log(updateRecords(2548, "artist", "")); // artist should not be set
// console.log(updateRecords(1245, "tracks", "Addicted to Love")); // tracks should have "addicted to love"
// console.log(updateRecords(2468, "tracks", "Free")); // tracks should have 1999
// console.log(updateRecords(2548, "tracks", "")); // tracks should not be set
// console.log(updateRecords(1245, "album", "Riptide")); // album should be "riptide"

//? Iterate though array
// var myArr = [2, 3, 4, 5, 6];

// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   console.log((total += myArr[i]));
// }
// console.log("total", total);

//? Nested for loops

// function multiplyAll(arr) {
//   let product = 1;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );
// console.log(multiplyAll([[1], [2], [3]]));

//? Replace Loops using Recursion

//* Original loop
// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

//* W/ Recursion
// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

// arr1 = [1, 2, 3, 4, 5];

// console.log(multiply(arr1, 4));

// let add = function (n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n + add(n - 1);
//   }
// };

// console.log(add(4));

// 4 + add(3);
// 4 + 3 + add(2);
// 4 + 3 + 2 + add(1);
// 4 + 3 + 2 + add(0);
// 4 + 3 + 2 + 0 = 9

//? Profile Looking (iterate though object)

// Setup
// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       console.log(`found ${name}`);
//       if (contacts[i].hasOwnProperty(prop)) {
//         console.log(`found prop: ${prop}`);
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// // console.log(lookUpProfile("Akira", "lastName"));
// console.log(lookUpProfile("Kristian", "lastName"));

//? random number with a min/max

// let arr = [];

// function randomRange(myMin, myMax) {
//   for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * (myMax - myMin + 1) + myMin));
//   }
// }
// randomRange(5, 12);

// console.log(arr);

//? Use the "parseInt()" function with a Radix
//* parseInt(string,radix)

// function convertToInteger(str) {
//   console.log(parseInt(str, 10));
// }

// convertToInteger("010");

//? Use Recursion to Create a Countdown

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     return [n].concat(countdown(n - 1));
//   }
// }

// console.log(countdown(10));

//? Recursion to Create a Range of numbers

// function rangeOfNumbers (startNum, endNum) {
//   if (startNum === endNum) {
//     return [startNum]
//   } else {
//     const recall = rangeOfNumbers(startNum, endNum - 1)
//     recall.push(endNum)
//     return recall
//   }
// }

// console.log(rangeOfNumbers(1, 10))

//! End of Javascript Basics *CONGRATS* ========================================================================================================================
//? Onto ES6 (easy)

//? Arrow Function w/ Spread OP

// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0)
// }

//? Use Destructuring Assignment to Assign Variables from Nested Objects

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// }

// let {
//   today: { low: lowToday, high: highToday }
// } = LOCAL_FORECAST

// console.log(lowToday)

//? Use Destructuring Assignment to Assign Variables from Arrays

// const [, , a, , b] = [1, 2, 3, 4, 5, 6]
// console.log(a, b) // 3, 5

// let a = 8,
//   b = 6

// ;[a, b] = [b, a]

// console.log(a, b)

//? Use class Syntax to Define a Constructor Function

//* ES5

// const UserName = function (firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
// }

// const user = new UserName('Nathan', 'Daniels')

// console.log(user)

//* ES6
// class UserName {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

// const user = new UserName('Nathan', 'Daniels')

// console.log(user)

//* Test
// class Vegetable {
//   constructor (name) {
//     this.name = name
//   }
// }

// let carrot = new Vegetable('carrot')
// console.log(carrot)

//? Use getters and setters to Control Access to an Object

// class Thermostat {
//   constructor (fahrenheit) {
//     this.fahrenheit = fahrenheit
//   }
//   get temperature () {
//     return (5 / 9) * (this.fahrenheit - 32)
//   }
//   set temperature (celcius) {
//     this.fahrenheit = (celcius * 9.0) / 5 + 32
//   }
// }

// const thermos = new Thermostat(76)
// let temp = thermos.temperature
// thermos.temperature = 26
// temp = thermos.temperature

// console.log(temp)
// console.log(thermos.temperature)

//? Import/Export files
