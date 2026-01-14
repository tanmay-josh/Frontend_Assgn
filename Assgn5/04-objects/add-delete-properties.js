// Add and delete object properties dynamically

let user = {
  name: "John",
  age: 25,
  city: "Mumbai",
};

console.log("Original object:", user);

// Add new property
user.mobileNumber = "9876543210";
console.log("\nAfter adding mobileNumber:", user);

// Delete property
delete user.city;
console.log("\nAfter deleting city:", user);

console.log("\nFinal properties:", Object.keys(user));
