const distanceToNearestVowel = (str) => {
  const result = [];

  // Where are the vowels
  // Where is current
  // Find the closest vowel in either direction

  let i = 1;

  let isVowel = 0; // if vowel return 0;

  // if not vowel, check before and after
  let before = str.slice(0, i).lastIndexOf('a');
  let after = str.indexOf('a', i);

  console.log(before, after);
  //return false;
};

// Tests
// console.log(distanceToNearestVowel('aaaaa'), [0, 0, 0, 0, 0]);
// console.log(distanceToNearestVowel('bba'), [2, 1, 0]);
// console.log(distanceToNearestVowel('abbb'), [0, 1, 2, 3]);
console.log(distanceToNearestVowel('abab'), [0, 1, 0, 1]);
// console.log(distanceToNearestVowel('babbb'), [1, 0, 1, 2, 3]);
// console.log(distanceToNearestVowel('baaab'), [1, 0, 0, 0, 1]);
// console.log(distanceToNearestVowel('abcdabcd'), [0, 1, 2, 1, 0, 1, 2, 3]);
// console.log(distanceToNearestVowel('abbaaaaba'), [0, 1, 1, 0, 0, 0, 0, 1, 0]);
// console.log(distanceToNearestVowel('treesandflowers'), [
//   2,
//   1,
//   0,
//   0,
//   1,
//   0,
//   1,
//   2,
//   2,
//   1,
//   0,
//   1,
//   0,
//   1,
//   2,
// ]);
// console.log(distanceToNearestVowel('pokerface'), [1, 0, 1, 0, 1, 1, 0, 1, 0]);
// console.log(distanceToNearestVowel('beautiful'), [1, 0, 0, 0, 1, 0, 1, 0, 1]);
// console.log(distanceToNearestVowel('rythmandblues'), [
//   5,
//   4,
//   3,
//   2,
//   1,
//   0,
//   1,
//   2,
//   2,
//   1,
//   0,
//   0,
//   1,
// ]);
// console.log(distanceToNearestVowel('shopper'), [2, 1, 0, 1, 1, 0, 1]);
// console.log(distanceToNearestVowel('singingintherain'), [
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   2,
//   1,
//   0,
//   1,
//   0,
//   0,
//   1,
// ]);
// console.log(distanceToNearestVowel('sugarandspice'), [
//   1,
//   0,
//   1,
//   0,
//   1,
//   0,
//   1,
//   2,
//   2,
//   1,
//   0,
//   1,
//   0,
// ]);
// console.log(distanceToNearestVowel('totally'), [1, 0, 1, 0, 1, 2, 3]);
