// Using reduce to find the sum of array elements

const numbers = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Array:", numbers);
console.log("Sum of all elements:", sum); // 457
