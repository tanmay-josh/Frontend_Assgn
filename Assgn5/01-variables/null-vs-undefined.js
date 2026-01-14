/**
 * Difference between null and undefined
 * null: An assignment value that represents "no value" or "nothing" (intentional absence).
 * undefined: A variable that has been declared but not assigned a value (unintentional absence).
 *
 * Key differences:
 * - typeof undefined returns "undefined"
 * - typeof null returns "object"
 * - null == undefined is true (loose equality)
 * - null === undefined is false (strict equality)
 * - Functions without explicit return statement return undefined
 * - Functions can explicitly return null
 */

console.log("=== null vs undefined ===\n");

// undefined
let x;
console.log("let x;");
console.log("Value:", x); // undefined
console.log("Type:", typeof x); // undefined
console.log();

// null
let y = null;
console.log("let y = null;");
console.log("Value:", y); // null
console.log("Type:", typeof y); // object (special case in JS)
console.log();

// Comparison
console.log("=== Comparison ===");
console.log("null == undefined:", null == undefined); // true (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)
console.log();

// Function without return
function noReturn() {}
console.log("Function with no return:", noReturn()); // undefined

// Explicitly returning null
function returnNull() {
  return null;
}
console.log("Function returning null:", returnNull()); // null
