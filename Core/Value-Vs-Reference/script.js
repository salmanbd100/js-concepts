// In Javascript, data types fall into two categories:
// 1. Value types (primitive types)
// 2. Reference types (objects, arrays, functions)

// Value Types (Primitive Types)
let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let nullValue = null; // Null
let undefinedValue; // Undefined
let symbolValue = Symbol("unique"); // Symbol
let bigintValue = BigInt(9007199254740991); // BigInt

// Stored directly in memory(Stack).
// When assigned or passed, a copy is made.
let anotherNumber = number; // Copy of value
anotherNumber = 100; // Changing anotherNumber does not affect number
console.log(number); // 42
console.log(anotherNumber); // 100

// Reference Types (Non-Primitive Types)
let array = [1, 2, 3]; // Array
let object = { key: "value" }; // Object
let func = function () {
  return "Hello";
}; // Function
// Date, RegExp, Map, Set, etc. are also reference types.

// Stored in memory(Heap).
// Assigning or passing copies the reference, not the actual object itself.
let anotherArray = array; // Reference to the same array
anotherArray.push(4); // Modifying anotherArray affects array
console.log(array); // [1, 2, 3, 4]
console.log(anotherArray); // [1, 2, 3, 4]

// Functions and parameters
function updatePrimitive(value) {
  value = 100; // This does not change the original value
}
updatePrimitive(number);
console.log(number); // 42 (Value changed only inside the function)

function updateReference(arr) {
  arr.push(5); // This modifies the original array
}
updateReference(array);
console.log(array); // [1, 2, 3, 4, 5]
console.log(anotherArray); // [1, 2, 3, 4, 5]
// Conclusion
// Value types are immutable and copied by value, while reference types are mutable and copied by reference
// Understanding this distinction is crucial for managing data in JavaScript effectively.
// and avoiding unintended side effects in your code.
// Always be cautious when working with reference types, as changes to one reference will affect all references
// pointing to the same object or array.
// Use value types when you need independent copies, and reference types when you want to share data
// between different parts of your code.
