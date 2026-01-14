// Convert string to title case

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const text = "hello world";
console.log("Original:", text);
console.log("Title Case:", toTitleCase(text)); // Hello World

// More examples
console.log(toTitleCase("javascript is awesome")); // Javascript Is Awesome
console.log(toTitleCase("THE QUICK BROWN FOX")); // The Quick Brown Fox
