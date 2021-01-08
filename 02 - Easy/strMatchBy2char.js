const strMatchBy2char = (a, b) => {
  let pair1, pair2;
  let count = 0;

  for (let i = 0; i < a.length - 1; i++) {
    pair1 = `${a[i]}${a[i + 1]}`;
    pair2 = `${b[i]}${b[i + 1]}`;

    if (pair1 === pair2) count++;
  }

  return count;
};

// Tests
console.log(strMatchBy2char('jjcAAzz', 'jjBAAz'), 3, 'Some matches');
console.log(strMatchBy2char('ABcd', 'ABcD'), 2, 'case matters');
console.log(strMatchBy2char('ABc', 'Ajc'), 0, 'No matches');
console.log(strMatchBy2char('edabit', 'ed'), 1, 'B in A');
console.log(strMatchBy2char('ed', 'edabit'), 1, 'A in B');
console.log(strMatchBy2char('e', 'edabit'), 0, '1 char is not a match');
console.log(strMatchBy2char('', 'edabit'), 0, 'Empty string check');
console.log(strMatchBy2char('AABBccDD', 'ABBBjjD'), 1, 'Random string');
console.log(strMatchBy2char('AAjjAAjj', 'iAjjAi'), 3, 'Random string');
console.log(strMatchBy2char('iAjjAi', 'AAjjAAjj'), 3, 'Random string');
