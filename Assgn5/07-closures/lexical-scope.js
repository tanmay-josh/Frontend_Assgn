// How inner functions access outer variables

// Example 1: Simple closure
function outer() {
  const message = "Hello from outer";

  function inner() {
    console.log(message); // Accesses outer variable
  }

  return inner;
}

const fn = outer();
fn(); // "Hello from outer"

console.log("\n--- Example 2: Multiple levels ---");

function level1() {
  const x = "Level 1";

  function level2() {
    const y = "Level 2";

    function level3() {
      const z = "Level 3";
      console.log(x, y, z); // Accesses all outer variables
    }

    return level3;
  }

  return level2;
}

const fn2 = level1()();
fn2(); // "Level 1 Level 2 Level 3"

console.log("\n--- Example 3: Closure with loop ---");

function createFunctions() {
  const functions = [];

  for (let i = 0; i < 3; i++) {
    functions.push(() => {
      console.log("Value:", i); // Each function remembers its own i
    });
  }

  return functions;
}

const fns = createFunctions();
fns[0](); // "Value: 0"
fns[1](); // "Value: 1"
fns[2](); // "Value: 2"
