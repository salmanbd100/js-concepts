// What is debounce?
// Debouncing is a programming pattern used to limit how often a function gets called.
// It ensures that a function is not called too frequently, which can be useful for performance optimization
// in scenarios like handling user input events, resizing windows, or API calls.

// The debounce function takes two arguments:
// - func: the function to be debounced - delay: the time in milliseconds to wait before calling the function

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout to call the function after the specified delay
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// How it works:
// 1. timerId tracks the timeout.
// 2. When the debounced function is called, it clears any existing timeout.
// 3. It sets a new timeout to call the original function after the specified delay.
// 4. If the debounced function is called again before the delay, the previous timeout
//    is cleared, and a new one is set, effectively postponing the function call.
// 5. fn.apply(this, args) ensures context and arguments are preserved.

// Goal: Optimize performance, avoid unnecessary execution.

// Example usage:

const inputField = document.getElementById("inputField");

function fetchSuggestions(query) {
  console.log("API Call with:", query);
}
// Debounce the fetchSuggestions function to limit API calls

const debouncedFetchSuggestions = debounce(fetchSuggestions, 2000);

inputField.addEventListener("input", (event) => {
  const query = event.target.value;
  debouncedFetchSuggestions(query);
});

// In this example, the fetchSuggestions function will only be called after the user stops typing for 300 milliseconds.
// This prevents excessive API calls while the user is still typing, improving performance and user experience.
// The debounce function can be reused for other functions that need similar behavior.
// You can adjust the delay as needed for different scenarios.
// This is a simple debounce implementation that can be used in various scenarios to optimize performance.
