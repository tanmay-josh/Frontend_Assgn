// Function to check data type using typeof

function checkDataType(value) {
  console.log(`Value: ${value}, Type: ${typeof value}`);
}

// Test with different data types
checkDataType(10); // Type: number
checkDataType("hello"); // Type: string
checkDataType(true); // Type: boolean
checkDataType(undefined); // Type: undefined
checkDataType(null); // Type: object (special case)
checkDataType([1, 2, 3]); // Type: object
checkDataType({ name: "John" }); // Type: object
checkDataType(() => {}); // Type: function
checkDataType(Symbol("id")); // Type: symbol
