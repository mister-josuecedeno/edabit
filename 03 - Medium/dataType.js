const dataType = (value) => {
  return;
}

// Tests

console.log(dataType([1, 2, 3, 4, 5]), "array")
console.log(dataType({key: "value"}), "object")
console.log(dataType("This is an example string..."), "string")
console.log(dataType(2017), "number")
console.log(dataType(true), "boolean")
console.log(dataType(null), "null")
console.log(dataType(undefined), "undefined")
console.log(dataType(new Date()), "date")
