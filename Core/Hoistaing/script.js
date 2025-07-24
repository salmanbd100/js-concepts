// What is Hoisting?

// Hoisting is JvaScript's default behavior of moving declarations to the top of the current scope.
// function declarations, variable declarations, and class declarations are hoisted
// Variables declared with var are hoisted to the top of their function or global scope, but initialized as undefined.
// Variables declared with let and const are also hoisted, but they are not initialized, leading to a "Temporal Dead Zone" until the declaration is encountered.
// Function declarations are hoisted completely, meaning they can be called before they are defined in the code.
// Class declarations are also hoisted, but they cannot be used before they are defined, leading to a ReferenceError.
// Hoisted done during the compilation phase -- before the code is executed.

// When Javascript runs your code, it goes through two main phases:
// 1. Compilation Phase: Allocates memory for variables and functions, hoisting them to the top of teir scope.
// 2. Execution Phase: Executes the code line by line, using the memory allocated during the compilation phase.

// Example 1: var Hoisting
console.log(x); // undefined (Hoisted but not initialized)
var x = 5;
console.log(x); // 5

// Example 2: let and const Hoisting (TDZ)
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // This line will not be executed due to the error above

// Example 3: Function Declaration and Expression Hoisting
console.log(myFunction()); // "Hello, World!" (Function declaration is fully hoisted)
function myFunction() {
  return "Hello, World!";
}

// console.log(myFunctionExpression()); // TypeError: myFunctionExpression is not a function (Function expression is not hoisted)
const myFunctionExpression = function () {
  return "Hello, Function Expression!";
};

// Example 4: Class Declaration Hoisting
// console.log(MyClass); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {
  constructor() {
    this.name = "MyClass Instance";
  }
}

const myInstance = new MyClass();
console.log(myInstance.name); // "MyClass Instance"
