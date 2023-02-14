// https://edabit.com/challenge/s6ZMJPDH4woN3d3Gc

const mysteryFunc = (str) => {
  return str.split('').map((l) => l.charCodeAt(0) % str.length);
};

// Tests

console.log(mysteryFunc('hello'), [4, 1, 3, 3, 1]);
console.log(mysteryFunc('maybe'), [4, 2, 1, 3, 1]);
console.log(mysteryFunc('hopeless'), [0, 7, 0, 5, 4, 5, 3, 3]);
console.log(mysteryFunc('higher'), [2, 3, 1, 2, 5, 0]);
console.log(mysteryFunc('movement'), [5, 7, 6, 5, 5, 5, 6, 4]);
