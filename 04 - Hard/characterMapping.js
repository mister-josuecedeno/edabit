// https://edabit.com/challenge/9MEWMJ5eX8EAiWSs5

const characterMapping = (str) => {
  // Create a map to store the first occurrence of each character
  const charMap = new Map();
  // Create an array to store the mapped values
  const mappedValues = [];
  // Iterate through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // If the character is not in the map, add it with the current index as the value
    if (!charMap.has(char)) {
      charMap.set(char, charMap.size);
    }
    // Push the mapped value to the array
    mappedValues.push(charMap.get(char));
  }
  // Return the array of mapped values
  return mappedValues;
}

// Tests

console.log(JSON.stringify(characterMapping("abcd")) == JSON.stringify([0, 1, 2, 3]))
console.log(JSON.stringify(characterMapping("abb")) == JSON.stringify([0, 1, 1]))
console.log(JSON.stringify(characterMapping("babbcb")) == JSON.stringify([0, 1, 0, 0, 2, 0]))
