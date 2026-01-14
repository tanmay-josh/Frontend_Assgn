// Function accepting 5 numbers using rest parameters

function sumNumbers(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log("Sum of 10, 20, 30, 40, 50:", sumNumbers(10, 20, 30, 40, 50)); // 150
console.log("Sum of 5, 15, 25, 35, 45:", sumNumbers(5, 15, 25, 35, 45)); // 125
console.log("Sum of 1, 2, 3, 4, 5:", sumNumbers(1, 2, 3, 4, 5)); // 15

// Can also use reduce with rest parameters
const sumWithReduce = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log("Using reduce:", sumWithReduce(100, 200, 300, 400, 500)); // 1500
