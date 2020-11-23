// Solution

const perimeter = (l, num) => {
  return (l === 's' && 4 * num) || (l === 'c' && 6.28 * num);
};

// Tests

console.log(perimeter('s', 1), 4);
console.log(perimeter('s', 4), 16);
console.log(perimeter('s', 9), 36);
console.log(perimeter('s', 13), 52);
console.log(perimeter('s', 30), 120);
console.log(perimeter('c', 1), 6.28);
console.log(perimeter('c', 4), 25.12);
console.log(perimeter('c', 9), 56.52);
console.log(perimeter('c', 13), 81.64);
console.log(perimeter('c', 30), 188.4);
