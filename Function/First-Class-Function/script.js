// First class functions in JavaScript

// In javascript, functions are first-class citizens. which means function are treated like
// any other value.

// You can

// 1. Assign a function to a variable
// 2. Pass a function as an argument to another function
// 3. Return a function from another function
// 4. Store a function in array or object.

// A first-class function is a function that can be assigned to a variable, passed as an argument,
// or returned from another function -- just like any other value in JavaScript.

// This is a language feature, not syntax-specific to Javascript alone.
// Languages like Python, Ruby and Scala have it too.

// Example 1: Assigning a function to a variable

const greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet("Alice")); // Output: Hello, Alice!

// Example 2: Passing a function as an argument to another function
function processUserInput(callback) {
  const userName = "Bob";
  console.log(callback(userName));
}
processUserInput(greet); // Output: Hello, Bob!

// Example 3: Returning a function from another function
function createMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// Common Confusion: First-class functions vs. Higher-order functions
// First-Class: A language feature -- function behave like any other value.
// Higher-Order: A function that takes a function as an argument or returns a function.

// Higher-order function example
function higherOrderFunction(fn) {
  return function (x) {
    return fn(x) + 1; // Adds 1 to the result of the passed function
  };
}
const increment = higherOrderFunction(function (num) {
  return num;
});
console.log(increment(5)); // Output: 6
