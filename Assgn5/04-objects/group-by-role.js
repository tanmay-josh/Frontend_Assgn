// Group array of objects by role

const users = [
  { name: "Pratik", role: "admin" },
  { name: "Amit", role: "user" },
  { name: "Neha", role: "admin" },
  { name: "Ravi", role: "user" },
];

// Method 1: Using reduce
function groupByRole(arr) {
  return arr.reduce((group, user) => {
    const role = user.role;
    if (!group[role]) {
      group[role] = [];
    }
    group[role].push(user);
    return group;
  }, {});
}

const grouped = groupByRole(users);
console.log(JSON.stringify(grouped, null, 2));

// Output:
// {
//   "admin": [
//     { "name": "Pratik", "role": "admin" },
//     { "name": "Neha", "role": "admin" }
//   ],
//   "user": [
//     { "name": "Amit", "role": "user" },
//     { "name": "Ravi", "role": "user" }
//   ]
// }
