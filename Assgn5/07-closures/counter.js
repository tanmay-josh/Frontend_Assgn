// Create a counter function using closure

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

console.log("Initial count:", counter.getCount()); // 0
console.log("After increment:", counter.increment()); // 1
console.log("After increment:", counter.increment()); // 2
console.log("After decrement:", counter.decrement()); // 1
console.log("Final count:", counter.getCount()); // 1

// Each counter is independent
const counter2 = createCounter();
console.log("\nNew counter:", counter2.getCount()); // 0
console.log("Original counter still:", counter.getCount()); // 1
