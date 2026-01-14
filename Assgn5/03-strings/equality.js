// Difference between == and ===

console.log("=== Loose Equality (==) ===\n");

console.log('5 == "5":', 5 == "5"); // true (type coercion)
console.log("0 == false:", 0 == false); // true (type coercion)
console.log("null == undefined:", null == undefined); // true
console.log('[] == "":', [] == ""); // true
console.log('"" == 0:', "" == 0); // true
console.log();

console.log("=== Strict Equality (===) ===\n");

console.log('5 === "5":', 5 === "5"); // false (different types)
console.log("0 === false:", 0 === false); // false (different types)
console.log("null === undefined:", null === undefined); // false
console.log("5 === 5:", 5 === 5); // true
console.log('"hello" === "hello":', "hello" === "hello"); // true
console.log();

console.log("=== Best Practice ===");
console.log("Always use === to avoid unexpected type coercion");
