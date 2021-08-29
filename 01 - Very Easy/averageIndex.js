const averageIndex = (letters) => {
  const getCharIndex = (letter) => {
    let charIndex = letter.toLowerCase().charCodeAt(0) - 96;
    return charIndex;
  };

  let sumOfAllNumbers = letters.reduce((acc, cv) => acc + getCharIndex(cv), 0);
  let numberOfItems = letters.length;
  return +(sumOfAllNumbers / numberOfItems).toFixed(2);
};

// Tests

console.log(averageIndex(['a', 'b', 'c', 'i']), 3.75);
console.log(averageIndex(['e', 'd', 'a', 'b', 'i', 't']), 6.83);
console.log(averageIndex(['o', 'm', 'g']), 11.67);
console.log(averageIndex(['o', 'h', 'n', 'o']), 13.0);
console.log(
  averageIndex(['t', 'w', 'e', 'n', 't', 'y', 't', 'w', 'e', 'n', 't', 'y']),
  17.83
);
console.log(
  averageIndex([
    'y',
    'o',
    'u',
    'a',
    'r',
    'e',
    't',
    'h',
    'e',
    'b',
    'e',
    's',
    't',
  ]),
  12.62
);

// Author: Juan esteban
