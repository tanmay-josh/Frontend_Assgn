// Destructure an object and access properties

const user = {
  name: "Akshay",
  age: 25,
  city: "Pune",
};

// Destructuring
const { name, age } = user;

console.log(name); // Akshay
console.log(age); // 25

// Can also rename
const { name: userName, age: userAge } = user;
console.log(userName); // Akshay
console.log(userAge); // 25
