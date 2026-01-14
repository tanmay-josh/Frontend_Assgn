// Reverse an array

const numbers = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

// Method 1: Using reverse() - modifies original array
const reversed1 = [...numbers].reverse();
console.log("Original array:", numbers);
console.log("Reversed (using reverse()):", reversed1);

// Method 2: Using a loop - creates new array
const reversed2 = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed2.push(numbers[i]);
}
console.log("Reversed (using loop):", reversed2);

// [50, 1, 23, 6, 12, 9, 3, 45, 78, 65, 23, 1, 56, 23, 4, 20]
