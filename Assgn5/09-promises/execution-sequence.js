// Guess the execution sequence

console.log("1: Start");

setTimeout(() => {
  console.log("2: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise");
});

console.log("4: End");

// Output:
// 1: Start
// 4: End
// 3: Promise
// 2: setTimeout

// Explanation:
// - console.log calls are synchronous, so "1: Start" and "4: End" execute first
// - Promise.then() is a microtask, added to microtask queue
// - setTimeout is a macrotask, added to macrotask queue
// - Event loop executes all synchronous code first
// - Then executes all microtasks (Promise)
// - Then executes macrotasks (setTimeout)
