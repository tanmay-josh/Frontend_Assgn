// getUserData function using async/await with try/catch

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

// Using async/await with try/catch
async function fetchUser(userId) {
  try {
    console.log("Fetching user data...");
    const user = await getUserData(userId);
    console.log("User found:");
    console.log(user);
    return user;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Call the async function
console.log("--- Valid userId ---");
fetchUser(1);

console.log("\n--- Invalid userId ---");
setTimeout(() => {
  fetchUser(0);
}, 2000);
