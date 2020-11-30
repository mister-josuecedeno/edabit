// Create a function that determines if the temp of the water is
// considered boiling or not. temp will be measured in fahrenheit and celsius.

// Solution

const isBoiling = (temp) => {
  const boiling = {
    F: 212,
    C: 100,
  };

  return parseInt(temp) >= boiling[temp.slice(-1)];
};

// Tests
console.log(isBoiling('212F'), true);
console.log(isBoiling('100C'), true);
console.log(isBoiling('0F'), false);
console.log(isBoiling('-1F'), false);
console.log(isBoiling('213F'), true);
console.log(isBoiling('104C'), true);
console.log(isBoiling('-10F'), false);
