const evenOrOdd = (arr) => {
  const sum = arr.reduce((acc, cv) => acc + cv, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
};

// Tests
console.log(evenOrOdd([0]), 'even');
console.log(evenOrOdd([1]), 'odd');
console.log(evenOrOdd([]), 'even');
console.log(evenOrOdd([0, 1, 5]), 'even');
console.log(evenOrOdd([0, 1, 3]), 'even');
console.log(evenOrOdd([1023, 1, 2]), 'even');
console.log(evenOrOdd([0, -1, -5]), 'even');
console.log(evenOrOdd([0, -1, -3]), 'even');
console.log(evenOrOdd([-1023, 1, -2]), 'even');
console.log(evenOrOdd([0, 1, 2]), 'odd');
console.log(evenOrOdd([0, 1, 4]), 'odd');
console.log(evenOrOdd([1023, 1, 3]), 'odd');
console.log(evenOrOdd([0, -1, 2]), 'odd');
console.log(evenOrOdd([0, 1, -4]), 'odd');
console.log(evenOrOdd([-1023, -1, 3]), 'odd');
