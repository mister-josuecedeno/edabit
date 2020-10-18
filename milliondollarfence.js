// Your task is to create a fence worth $1 million. You are given the price of the material (per character),
// meaning the length of the fence will change depending on the cost of the material.
// Create a function which constructs this pricey pricey fence, using the letter "H" to build.

const constructFence = (price) => {
  const n = +price.slice(1).split(',').join('');
  const repeat = 1000000 / n;
  return 'H'.repeat(repeat);
};

console.log(constructFence('$50,000'), 'HHHHHHHHHHHHHHHHHHHH');
console.log(constructFence('$100,000'), 'HHHHHHHHHH');
console.log(constructFence('$1,000,000'), 'H');
console.log(constructFence('$500,000'), 'HH');
