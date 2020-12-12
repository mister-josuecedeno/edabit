// Solution

const elementSet = (s) => {
  return [...s][0];
};

// Test
const first = new Set();
first.add(1);
first.add(2);
console.log(elementSet(first), 1);

const second = new Set();
second.add('apple');
second.add('kiwi');
console.log(elementSet(second), 'apple');

const third = new Set();
third.add(false);
third.add(true);
console.log(elementSet(third), false);
