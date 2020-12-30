const distanceToNearestVowel = (str) => {
  const result = [];
  let current = 0;
  let before, after;

  // Where are the vowels
  const vowelMap = [...str].map((chr) => +'aeiou'.includes(chr));

  // Which is closer
  const getCloser = (current, before, after) => {
    let beforeDiff = current - before;
    let afterDiff = after - current;

    if (before !== -1 && after !== -1) {
      return Math.min(beforeDiff, afterDiff);
    } else if (before === -1) {
      return afterDiff;
    } else if (after === -1) {
      return beforeDiff;
    } else {
      return -1;
    }
  };

  // Find the closest vowel in either direction (before/after)
  // if not vowel, check before and after
  for (let i = 0; i < vowelMap.length; i++) {
    current = i;

    if (vowelMap[i] === 1) {
      result.push(0);
    } else {
      before = vowelMap.slice(0, i).lastIndexOf(1);
      after = vowelMap.indexOf(1, i);
      result.push(getCloser(current, before, after));
    }
  }

  return result;
};

// Tests
console.log(distanceToNearestVowel('aaaaa'), [0, 0, 0, 0, 0]);
console.log(distanceToNearestVowel('bba'), [2, 1, 0]);
console.log(distanceToNearestVowel('abbb'), [0, 1, 2, 3]);
console.log(distanceToNearestVowel('abab'), [0, 1, 0, 1]);
console.log(distanceToNearestVowel('babbb'), [1, 0, 1, 2, 3]);
console.log(distanceToNearestVowel('baaab'), [1, 0, 0, 0, 1]);
console.log(distanceToNearestVowel('abcdabcd'), [0, 1, 2, 1, 0, 1, 2, 3]);
console.log(distanceToNearestVowel('abbaaaaba'), [0, 1, 1, 0, 0, 0, 0, 1, 0]);
console.log(distanceToNearestVowel('treesandflowers'), [
  2,
  1,
  0,
  0,
  1,
  0,
  1,
  2,
  2,
  1,
  0,
  1,
  0,
  1,
  2,
]);
console.log(distanceToNearestVowel('pokerface'), [1, 0, 1, 0, 1, 1, 0, 1, 0]);
console.log(distanceToNearestVowel('beautiful'), [1, 0, 0, 0, 1, 0, 1, 0, 1]);
console.log(distanceToNearestVowel('rythmandblues'), [
  5,
  4,
  3,
  2,
  1,
  0,
  1,
  2,
  2,
  1,
  0,
  0,
  1,
]);
console.log(distanceToNearestVowel('shopper'), [2, 1, 0, 1, 1, 0, 1]);
console.log(distanceToNearestVowel('singingintherain'), [
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  2,
  1,
  0,
  1,
  0,
  0,
  1,
]);
console.log(distanceToNearestVowel('sugarandspice'), [
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  2,
  2,
  1,
  0,
  1,
  0,
]);
console.log(distanceToNearestVowel('totally'), [1, 0, 1, 0, 1, 2, 3]);
