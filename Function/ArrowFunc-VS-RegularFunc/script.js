// 1. Syntax diffrences
function regularFunction(a, b) {
  return a + b;
}

const arrowFunction = (a, b) => {
  return a + b;
};

// 2. This behavior
const obj = {
  value: 42,
  regularMethod: function () {
    console.log(this.value); // 'this' refers to obj
  },
  arrowMethod: () => {
    console.log(this.value); // 'this' refers to the global object or undefined in strict mode
  },
};

// arguments object
function regularWithArgs() {
  console.log(arguments); // Available, contains all passed arguments
}

const arrowFunc = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

// use ...rest in arrow functions instead
const arrowWithRest = (...args) => {
  console.log(args); // Works, args is an array of passed arguments
};

// 4. Constructor functions behavior
function RegularConstructor(name) {
  this.name = name;
}
const arrowConstructor = (name) => {
  this.name = name; // Will not work as expected, 'this' is not bound to the new instance
};
// Usage of regular constructor
const regularInstance = new RegularConstructor("Regular");
console.log(regularInstance.name); // 'Regular'

// Interview tips:
// "Arrow functions are great for short callbacks and preserving 'this' inside closures. But avoid
// them for object methods or constructors."
