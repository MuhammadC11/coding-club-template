console.log("hello world!");
const myName = "Mo";
// const age = 20;
// age = 50; //this will not work because age is a const
// console.log(age);

// let age = 25;
// age = 20; //this will work because age is a let
// console.log(age);

// function age() {
//   const myAge = 18; // these are function scoped variables and are not available outside of the function.
//   const yourAge = 20;
//   console.log(myAge + yourAge);
// }
// age();
// console.log(myAge); //this will not work because myAge is not a global variable.

//this is example of parameters
// function add(num1, num2) {
//   console.log(num1 + num2);
// }
// add(10, 20); //this will work because the function takes in two parameters, 10 and 20. this basically declares these numbers as the value for num1 and num2.

function toUpper(str) {
  const upperCased = str.toUpperCase();
  console.log(upperCased);
}

toUpper(myName);

const toLower = (str) => {
  //this is an arrow function which can be used instead of writing out function.
  const lowerCased = str.toLowerCase();
  console.log(lowerCased);
};
toLower(myName);

console.log(`my name is ${myName}`); //allows you to include variables in a string to make it reactive.
