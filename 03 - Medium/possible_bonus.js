// Solution
const possible_bonus = (a, b) => {
  const min = a + 1;
  const max = a + 6;

  return b >= min && b <= max;
};

// Tests
console.log(possible_bonus(3, 7), true);
console.log(possible_bonus(1, 9), false);
console.log(possible_bonus(5, 3), false);
