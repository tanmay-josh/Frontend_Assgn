// Using filter to find numbers greater than 10

const numbers = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

const greaterThan10 = numbers.filter((num) => num > 10);

console.log("Original array:", numbers);
console.log("Numbers greater than 10:", greaterThan10);

// [20, 23, 56, 23, 65, 78, 45, 23, 50]
