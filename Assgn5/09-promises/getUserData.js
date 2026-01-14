// Promise function that returns user data based on userId

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({
          name: "John Doe",
          age: 28,
          city: "New York",
        });
      } else if (userId === 0) {
        reject("Error: User not found");
      }
    }, 1000);
  });
}

// Handling with .then() and .catch()
console.log("Fetching user data...\n");

getUserData(1)
  .then((user) => {
    console.log("User found:");
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("\n--- Fetching with invalid userId ---\n");

getUserData(0)
  .then((user) => {
    console.log("User found:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
