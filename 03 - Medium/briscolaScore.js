const MAX_SCORE = 120;
const CARD_SCORES = {
  A: 11,
  3: 10,
  K: 4,
  Q: 3,
  J: 2,
};

const briscolaScore = (...turns) => {
  const score = turns
    .flat()
    .reduce((total, card) => total + (CARD_SCORES[card[0]] || 0), 0);

  if (score === MAX_SCORE) return 'Draw!';
  return score > MAX_SCORE ? 'You Win!' : 'You Lose!';
};

// Tests

// Test #1
const myDeck1_test1 = [
  '3c',
  '3s',
  'Qd',
  'Jh',
  '5d',
  'Jc',
  '6d',
  'Ad',
  'Js',
  'Qc',
];
const myDeck2_test1 = [
  'Jd',
  'Kd',
  '4c',
  '6s',
  'Ks',
  '5c',
  '3d',
  'As',
  'Jh',
  '6h',
];
console.log(
  briscolaScore(myDeck1_test1, myDeck2_test1),
  'You Lose!',
  'Example #1'
);

// Test #2
const myDeck1_test2 = ['Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'];
const myDeck2_test2 = ['3d', 'Ad', 'Ac', 'As', 'Ah'];
console.log(
  briscolaScore(myDeck1_test2, myDeck2_test2),
  'You Win!',
  'Example #2'
);

// Test #3
const myDeck1_test3 = ['Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'];
const myDeck2_test3 = ['3d', 'Ad', 'Ac', 'As', '3h'];
console.log(briscolaScore(myDeck1_test3, myDeck2_test3), 'Draw!', 'Example #3');

// Test #4
const myDeck1_test4 = [
  '4h',
  '4s',
  '7s',
  '3d',
  '2c',
  'As',
  '3c',
  '4c',
  'Ah',
  '7h',
  'Kc',
  'Jc',
  'Qh',
  'Jd',
  'Ks',
];
const myDeck2_test4 = [
  '4s',
  'Ah',
  'Qh',
  '7c',
  '6s',
  'Js',
  '6d',
  'Qc',
  '5d',
  'Kd',
  '3d',
  'Ac',
  '4c',
  '5s',
  '3h',
  '6h',
  'As',
  '7d',
  '2s',
  '2c',
  '3c',
  '6c',
  '7h',
  'Kc',
];
console.log(briscolaScore(myDeck1_test4, myDeck2_test4), 'You Win!');

// Test #5
const myDeck1_test5 = [
  'Js',
  'Qc',
  '2c',
  'Kc',
  'Kh',
  '7c',
  '5h',
  'Jh',
  '2s',
  '6d',
  '4s',
  '4c',
  'Kd',
  '6s',
  'Ks',
  'Qh',
  '7s',
  'Jc',
  '5c',
  '5d',
  '6c',
  '2h',
  'Ad',
  '7d',
  'Ah',
  '5s',
  '3s',
  '6h',
];
const myDeck2_test5 = ['As', '3c', 'Kd', 'Ac', 'Ah', 'Ad', 'Jh'];
console.log(briscolaScore(myDeck1_test5, myDeck2_test5), 'Draw!');

// Test #6
const myDeck1_test6 = [
  '3c',
  '3s',
  'Qd',
  'Jh',
  '5d',
  'Jc',
  '6d',
  'Ad',
  'Js',
  'Qc',
];
const myDeck2_test6 = [
  '2s',
  'Kd',
  '3d',
  '6s',
  'Qc',
  '5c',
  '6d',
  '6h',
  '6c',
  '5h',
  'Qd',
  '4s',
  '3c',
  '2h',
  '3s',
];
console.log(briscolaScore(myDeck1_test6, myDeck2_test6), 'You Lose!');
