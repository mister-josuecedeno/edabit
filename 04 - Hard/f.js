// https://edabit.com/challenge/7PS8pQieTWw5vrRYM

const pairs = (n) => {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const pairs = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      pairs.push([numbers[i], numbers[j]]);
    }
  }

  return pairs;
};

const f = (n) => {
  const combinations = pairs(n);
  const successes = combinations.filter((p) =>
    Number.isInteger(Math.sqrt(p[0] * p[1]))
  );

  return successes.length / combinations.length;
};

// Tests

console.log(f(2), 0.5);
console.log(f(10), 0.18);
console.log(f(100), 0.031);
