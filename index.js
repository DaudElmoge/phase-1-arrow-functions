// Function Expression: Returns the sum of two numbers
const add = function (a, b) {
  return a + b;
};

// Function Expression: Returns the difference of two numbers
const subtract = function (a, b) {
  return a - b;
};

// Function Expression: Multiplies two numbers
const multiply = function (a, b) {
  return a * b;
};

// Function Expression: Divides two numbers
const divide = function (a, b) {
  return a / b;
};

// Arrow Function: Squares a number
const square = (x) => x * x;

// Arrow Function: Doubles each element in an array
const doubleArray = (arr) => arr.map((num) => num * 2);

// Arrow Function: Filters even numbers from an array
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// Testing the functions
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(3, 3)); // 9
console.log(divide(12, 4)); // 3
console.log(square(5)); // 25
console.log(doubleArray([1, 2, 3, 4])); // [2, 4, 6, 8]
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
