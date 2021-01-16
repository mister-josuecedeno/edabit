const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

const nameScore = (str) => {
  const score = [...str].reduce((acc, cur) => acc + (scores[cur] || 0), 0);

  if (score <= 60) {
    return 'NOT TOO GOOD';
  } else if (score <= 300) {
    return 'PRETTY GOOD';
  } else if (score <= 599) {
    return 'VERY GOOD';
  } else if (score >= 600) {
    return 'THE BEST';
  }

  return 'NO SCORE';
};

// Tests
console.log(nameScore('MUBASHIR'), 'THE BEST');
console.log(nameScore('MATT'), 'THE BEST');
console.log(nameScore('PAKISTAN'), 'THE BEST');
console.log(nameScore('AIRFORCE'), 'THE BEST');
console.log(nameScore('GUV'), 'NOT TOO GOOD');
console.log(nameScore('PUBG'), 'NOT TOO GOOD');
console.log(nameScore('ME'), 'PRETTY GOOD');
console.log(nameScore('BOB'), 'PRETTY GOOD');
console.log(nameScore('JLJ'), 'PRETTY GOOD');
console.log(nameScore('YOU'), 'VERY GOOD');
console.log(nameScore('FABIO'), 'VERY GOOD');
console.log(nameScore('ROBBY'), 'THE BEST');
console.log(nameScore('BILL GATES'), 'THE BEST');
