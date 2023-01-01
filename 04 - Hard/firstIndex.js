// https://edabit.com/challenge/Fev8jkLtDunP9wexv

const firstIndex = (hex, needle) => {
  return hex.map((h) => h);
};

// Tests

console.log(firstIndex('68 65 6c 6c 6f 20 77 6f 72 6c 64', 'world'), 6);
console.log(firstIndex('47 6f 6f 64 62 79 65 20 77 6f 72 6c 64', 'world'), 8);
console.log(
  firstIndex(
    '74 68 65 20 6e 65 65 64 6c 65 20 69 73 20 74 6f 20 62 65 20 66 6f 75 6e 64',
    'needle'
  ),
  4
);
console.log(
  firstIndex('a3 24 25 2d 2d 2d a3 24 20 77 6f 72 6c 64 2d 2d 2d', 'world'),
  9
);
console.log(firstIndex('42 6f 72 65 64 20 77 6f 72 6c 64', 'Bored'), 0);
