// Merge two arrays using spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using spread operator
const mergedArray = [...arr1, ...arr2];

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Merged array:", mergedArray); // [1, 2, 3, 4, 5, 6]

// Can also add elements in between
const merged2 = [...arr1, 3.5, ...arr2];
console.log("Merged with element in between:", merged2); // [1, 2, 3, 3.5, 4, 5, 6]
