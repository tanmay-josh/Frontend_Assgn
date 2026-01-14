// Function that accepts a callback and executes it after 10 seconds

function executeAfterDelay(callback) {
  console.log("Starting timer...");

  setTimeout(() => {
    console.log("10 seconds passed!");
    callback();
  }, 10000); // 10 seconds = 10000 milliseconds
}

// Usage
executeAfterDelay(() => {
  console.log("Callback executed!");
  console.log("Task complete");
});

// Alternative with named function
function myCallback() {
  console.log("This is my callback function");
}

console.log("\n--- Using named function ---");
executeAfterDelay(myCallback);
