// https://edabit.com/challenge/eJtRrrpRZEoaaYgvw

const isFullHouse = (hand) => {
  return;
};

// Tests

console.log(isFullHouse(['A', 'A', 'A', 'K', 'K']), true);
console.log(isFullHouse(['3', 'J', 'J', '3', '3']), true);
console.log(isFullHouse(['10', 'J', '10', 'J', '10']), true);
console.log(isFullHouse(['10', 'J', '10', '10', '10']), false);
console.log(isFullHouse(['10', 'J', 'J', '2', '2']), false);
console.log(isFullHouse(['7', 'J', '3', '4', '2']), false);
