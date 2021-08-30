const evenLast = (numbers) => {
  let last = numbers[numbers.length - 1];
  const evenIndex = numbers.filter((_, i) => i % 2 === 0);
  return evenIndex.reduce((acc, cv) => acc + cv * last, 0);
};

// tests

console.log(evenLast([2, 3, 4, 5]), 30);
console.log(evenLast([]), 0);
console.log(evenLast([2, 2, 2, 2]), 8);
console.log(evenLast([1, 3, 3, 1, 10]), 140);
console.log(evenLast([-11, 3, 3, 1, 10]), 20);
