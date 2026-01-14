// Print all keys and values using Object methods

const user = {
  name: "John",
  age: 25,
  city: "Mumbai",
};

console.log("=== Using Object.keys() ===");
const keys = Object.keys(user);
console.log("Keys:", keys); // ["name", "age", "city"]

console.log("\n=== Using Object.values() ===");
const values = Object.values(user);
console.log("Values:", values); // ["John", 25, "Mumbai"]

console.log("\n=== Using forEach with Object.keys() ===");
Object.keys(user).forEach((key) => {
  console.log(`${key}: ${user[key]}`);
});

console.log("\n=== Using forEach with Object.entries() ===");
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
