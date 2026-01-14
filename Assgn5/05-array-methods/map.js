// Using map to multiply each array element by 2

const numbers = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

const doubled = numbers.map((num) => num * 2);

console.log("Original array:", numbers);
console.log("After map (multiply by 2):", doubled);

// [40, 8, 46, 112, 2, 46, 130, 156, 90, 6, 18, 12, 46, 2, 100]
