// https://edabit.com/challenge/AtNMAGcwKDad5rC69

// Not my answer
function findRepeating(s) {
  if (!s) {
    return [];
  }

  let result = [];
  let prevChar = s[0];
  let firstIndex = 0;
  let timesRepeated = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === prevChar) {
      timesRepeated++;
    } else {
      result.push([prevChar, firstIndex, i - 1, timesRepeated]);
      prevChar = s[i];
      firstIndex = i;
      timesRepeated = 1;
    }
  }

  result.push([prevChar, firstIndex, s.length - 1, timesRepeated]);
  return result;
}

// Tests

console.log(findRepeating(''), []);
console.log(findRepeating('a'), [['a', 0, 0, 1]]);
console.log(findRepeating('1337'), [
  ['1', 0, 0, 1],
  ['3', 1, 2, 2],
  ['7', 3, 3, 1],
]);
console.log(findRepeating('aabbb'), [
  ['a', 0, 1, 2],
  ['b', 2, 4, 3],
]);
console.log(findRepeating('addressee'), [
  ['a', 0, 0, 1],
  ['d', 1, 2, 2],
  ['r', 3, 3, 1],
  ['e', 4, 4, 1],
  ['s', 5, 6, 2],
  ['e', 7, 8, 2],
]);
console.log(findRepeating('aabbbaabbb'), [
  ['a', 0, 1, 2],
  ['b', 2, 4, 3],
  ['a', 5, 6, 2],
  ['b', 7, 9, 3],
]);
console.log(findRepeating('1111222233334444'), [
  ['1', 0, 3, 4],
  ['2', 4, 7, 4],
  ['3', 8, 11, 4],
  ['4', 12, 15, 4],
]);
console.log(findRepeating('1000000000000066600000000000001'), [
  ['1', 0, 0, 1],
  ['0', 1, 13, 13],
  ['6', 14, 16, 3],
  ['0', 17, 29, 13],
  ['1', 30, 30, 1],
]);
