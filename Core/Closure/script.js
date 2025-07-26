// What is Closure?

// A Closure is a function that remembers the variable from its lexical scope
// even when the function is executed outside that scope.

// In Simple Terms:
// A function remembers where it was created, not where it is called.
// This is possible because functions in JavaScript close over their environment.

// The mental model:

// When a function is defined, it "remembers" its surrounsding environment -- this encludes.

// Classical Example of Closure

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(`Counter: ${counter}`);
  }
  return inner;
}
const fn = outer();
fn(); // Counter: 1
fn(); // Counter: 2
fn(); // Counter: 3

// Even though outer() is long gone,
// the inner() remembers counter.

// The real world use cases:
// 1. Private Variables(Encapsulation and Data Hiding)
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count: ${count}`);
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(counter.getCount()); // 1

// Count is privet -- only accessible via closures.

// setTimeout inside loops (Classic interview trap)
for (var i = 1; i <= 3; i++) {
  console.log("test", i);
  setTimeout(function () {
    console.log(`Timeout ${i}`); // Will log 4 three times
  }, 1000);
}

// Why? Because `var` is function-scoped, not block-scoped.
// The value of `i` is 4 after the loop ends.

// Solution: Use let to create a block scope
for (let j = 1; j <= 3; j++) {
  setTimeout(function () {
    console.log(`Timeout ${j}`); // Will log 1, 2, 3
  }, 1000);
}

// Fixed with closures and block scoping.

for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`Timeout ${j}`); // Will log 1, 2, 3
    }, 1000);
  })(i);
}

// How Closures work under the hood:
// When a function is returned, its scope is not destroyed. Javascript keeps it alive in memory.
// This is called "lexical scoping".
// Closures have a memory cost, so excessive closures can lead to memory leaks.
