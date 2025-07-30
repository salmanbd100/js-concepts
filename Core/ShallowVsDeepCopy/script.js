// Shalow copy
// A shallow copy duplicadtes only the top-level of an object.
// Nested objects/arrays are still share references.

const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "gaming"],
};

const shallowCopy = { ...original };

shallowCopy.name = "Salman"; // This will change the name in shallowCopy only
shallowCopy.address.city = "Los Angeles"; // This will change the city in both original

// ...spread, Object.assign, or Array.prototype.slice can be used for shallow copy

// Deep copy
// A deep copy duplicates everything, including nested objects/arrays.
const deepCopy = JSON.parse(JSON.stringify(original));
const deepCopy2 = structuredClone(original);

deepCopy.name = "Salman"; // This will change the name in deepCopy only
deepCopy.address.city = "Los Angeles"; // This will NOT change the city in original
deepCopy.hobbies.push("coding"); // This will NOT change the hobbies in original
