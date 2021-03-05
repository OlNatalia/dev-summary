// Functions
// keep functionality in one place (DRY principe)
// use same code many times with different arguments, to get different result

// Example 1 ------------------------------------
// Function Decorations
function greet() {
  console.log("Hello, I'm function decoration!");
}
greet();

// Example 2 ------------------------------------
// Function Expressions
let greet2 = function() {
  console.log("Hello, I'm function expression!");
};
greet2();

// Example 3 ------------------------------------
// Arrow Function Expression
let greet3 = () => {
  console.log("Hello, I'm arrow function!");
};
greet3();

// Example 4 ------------------------------------
// Function with Parameters, Arguments
let greetUser = userName => {
  console.log(`Hello ${userName}`);
};
greetUser("John");

// Example 5 ------------------------------------
// Function with return

// Example 5.1 ----------------------------------
// greet from user
let greeting = function(userName) {
  return `Hello, I'm ${userName}.`;
};
console.log(greeting("Nic"));

// Example 5.2 ----------------------------------
// simple calculation
let calculate = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};
console.log(calculate(5, 2));

// Example 5.3 ----------------------------------
// Calculation with function decoration
function calc(n1, n2) {
  return n1 + n2;
  //return `${n1} + ${n2} = ${n1 + n2}`;
}
console.log(calc(10, 5));

// // Example 5.4 ----------------------------------
// return two times the value of an input parameter num
let double = function(num) {
  return num * 2;
};

// save the return value to a variable by invoking the function
let doubleOfFive = double(5);
console.log(doubleOfFive);

let doubleOfSeven = double(7);
console.log(doubleOfSeven);
