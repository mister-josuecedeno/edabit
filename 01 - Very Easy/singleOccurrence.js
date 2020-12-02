// Create a function that, given a string str,
// finds a letter that has a single occurrence.
// Return the letter in uppercase.
// If the input is empty, return an empty string "".

// Solution

const singleOccurrence = (str) => {
  const charMap = {};

  for (let chr of str.toUpperCase()) {
    charMap[chr] = charMap[chr] + 1 || 1;
  }

  for (let ct in charMap) {
    if (charMap[ct] === 1) return ct;
  }

  return '';
};

// Tests
console.log(singleOccurrence('EFFEAABbc'), 'C');
console.log(singleOccurrence('AAAAVNNNNSS'), 'V');
console.log(singleOccurrence('S'), 'S');
console.log(singleOccurrence(''), '');
console.log(singleOccurrence('eEDABITaebiT'), 'D');
console.log(singleOccurrence('iSs'), 'I');
console.log(singleOccurrence('GOODd'), 'G');
