const neighboring = (str) => {
  const isNextValid = (current, next) => {
    if (next === undefined) return true;
    return Math.abs(current.charCodeAt(0) - next.charCodeAt(0)) === 1;
  };

  let validLetters = (
    [...str].filter((l, i, arr) => isNextValid(l, arr[i + 1])) || []
  ).length;

  return str.length === validLetters;
};

// Tests

console.log(neighboring('abcdedcba'), true);
console.log(neighboring('aba'), true);
console.log(neighboring('efghihfe'), false);
console.log(neighboring('xyzyx'), true);
console.log(neighboring('mnopqrstsrqponm'), true);
console.log(neighboring('zyz'), true);
console.log(neighboring('aeiou'), false);
console.log(neighboring('cdefg'), true);
console.log(neighboring('qrstuv'), true);
console.log(neighboring('aaaaa'), false);
