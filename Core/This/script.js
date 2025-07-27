// What is 'this' in Javascript?
// In javascript, 'this' refers to the object that is executing the current function.
// But the value of 'this' dependes on how the function is called.

// 'this' in different contexts

// 1. Global context
console.log(this); // In a browser, this will refer to the Window object
// In the browser, 'this' refers to the window object.
// In strict mode ('use strict'), 'this' will be undefined in the global context.

// 2. Inside a regular function
function regularFunction() {
  console.log(this);
}
regularFunction(); // In a browser, this will refer to the Window object
// In strict mode, 'this' will be undefined

// 3. Inside an object method
const obj = {
  name: "Object",
  method: function () {
    console.log(this);
  },
};
obj.method(); // 'this' refers to obj

// 4. Arrow function
const obj2 = {
  name: "Arrow Object",
  method: () => {
    console.log(this);
  },
};
obj2.method(); // 'this' refers to the global object (Window in browser) because arrow functions do not have their own 'this'

function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
new Timer(); // Works because arrow function uses `this` from Timer context

// 5. In a constructor function
function Person(name) {
  this.name = name;
}
const person = new Person("John");
console.log(person.name); // 'this' refers to the new object created by the constructor

// 6. In class methods
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
const dog = new Animal("Dog");
dog.speak(); // 'this' refers to the instance of Animal. Just like in constructor functions, 'this' refers to the instance of the class.

// 7. Using call, apply, and bind
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user); // 'this' refers to user object
greet.apply(user); // 'this' refers to user object
const greetUser = greet.bind(user);
greetUser(); // 'this' refers to user object

// call() & apply() invoke the function immediately with a specific this
// bind() returns a new function with bound this

// 8. In event handlers
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // 'this' refers to the button element that was clicked
});
// In arrow functions used as event handlers, 'this' will refer to the global object (Window in browser)
