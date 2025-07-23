// What is Scope?
// Scope defines where variables, functions, and objects are accessible in your code.. Misunderstanding scope
// is one of the top causes of bugs in JavaScript.

// Types of Scope in JavaScript:
// 1. Global Scope: Variables declared outside any function or block are in the global scope.
// 2. Function Scope: Variables declared within a function are only accessible within that function.
// 3. Block Scope: Variables declared with `let` or `const` within a block (like an `if` statement or a loop) are only accessible within that block.
// 4. Lexical Scope: Functions are executed using the scope in which they were defined, not where they are called.

// Example of Global Scope
let globalVar = "I am global";

function globalScopeExample() {
  console.log(globalVar); // Accessible here
}
globalScopeExample(); // Outputs: I am global

// Example of Function Scope
// Variables are only available within the function.
function functionScopeExample() {
  let functionVar = "I am local to this function";
  console.log(functionVar); // Accessible here
}
functionScopeExample(); // Outputs: I am local to this function
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// Example of Block Scope
// Variables are only available within the nearest {} block.
{
  let blockVar = "I am local to this block";
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// Example of Lexical Scope
function outerFunction() {
  let outerVar = "I am from outer function";

  function innerFunction() {
    console.log(outerVar); // Accessible here due to lexical scope
  }
  innerFunction(); // Outputs: I am from outer function
}
outerFunction(); // Outputs: I am from outer function

//Recommendation
// Always declare variables with `let` or `const` to avoid polluting the global scope.
// Use `const` for variables that won't change, and `let` for those that will.
// Avoid using `var` as it has function scope and can lead to unexpected behavior.
