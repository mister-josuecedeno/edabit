const nextSquare = (n) => {
  let sq = Math.sqrt(n);
  return Number.isInteger(sq) ? Math.pow(sq + 1, 2) : null;
};

// Tests
console.log(nextSquare(16), 25, 'Wrong output for 121');
console.log(nextSquare(121), 144, 'Wrong output for 121');
console.log(nextSquare(625), 676, 'Wrong output for 625');
console.log(nextSquare(319225), 320356, 'Wrong output for 319225');
console.log(
  nextSquare(15241383936),
  15241630849,
  'Wrong output for 15241383936'
);
console.log(nextSquare(155), null, 'Wrong output for 155');
console.log(nextSquare(342786627), null, 'Wrong output for 342786627');
