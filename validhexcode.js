// Create a function that determines whether a string is a valid hex code.

// A hex code must begin with a pound key # and is exactly 6 characters in length.
// Each character must be a digit from 0-9 or an alphabetic character from A-F.
// All alphabetic characters may be uppercase or lowercase.

const isValidHexCode = (code) => {
  const regex = /^#[A-F|0-9]{6}$/gi;
  return regex.test(code);
};

console.log(isValidHexCode('#CD5C5C'), true);
console.log(isValidHexCode('#EAECEE'), true);
console.log(isValidHexCode('#eaecee'), true);
console.log(isValidHexCode('#CD5C58C'), false, 'Length exceeds 6.');
console.log(isValidHexCode('#CD5C&C'), false, 'Unacceptable character.');
