const allAboutStrings = (str) => {
  const length = str.length;
  const first = str[0];
  const last = str[length - 1];
  const middle = length / 2;
  const middleChars =
    length % 2 === 0
      ? str.slice(middle - 1, middle + 1)
      : str.slice(middle, middle + 1);
  const indexOfSec = str.indexOf(str[1], 2);
  const found = indexOfSec === -1 ? 'not found' : `@ index ${indexOfSec}`;
  return [length, first, last, middleChars, found];
};

// Tests

console.log(allAboutStrings('LASA'), [4, 'L', 'A', 'AS', '@ index 3']);
console.log(allAboutStrings('Computer'), [8, 'C', 'r', 'pu', 'not found']);
console.log(allAboutStrings('Science'), [7, 'S', 'e', 'e', '@ index 5']);
console.log(allAboutStrings('homework'), [8, 'h', 'k', 'ew', '@ index 5']);
console.log(allAboutStrings('spring'), [6, 's', 'g', 'ri', 'not found']);
console.log(allAboutStrings('break'), [5, 'b', 'k', 'e', 'not found']);
console.log(allAboutStrings('programming'), [11, 'p', 'g', 'a', '@ index 4']);
console.log(allAboutStrings('bad'), [3, 'b', 'd', 'a', 'not found']);
