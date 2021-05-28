const possiblePath = (paths) => {
  let isClear = false;
  const clear = {
    1: [2],
    2: [1, 'H'],
    3: [4],
    4: [3, 'H'],
    H: [2, 4],
  };

  for (let i = 0; i < paths.length - 1; i++) {
    isClear = clear[paths[i]].includes(paths[i + 1]);
    if (isClear === false) return false;
  }

  return true;
};

// Tests
console.log(possiblePath([1, 2, 'H', 4, 3]), true);
console.log(possiblePath(['H', 1, 2]), false);
console.log(possiblePath([4, 3, 4, 'H', 4, 'H']), true);
console.log(possiblePath(['H']), true);
console.log(possiblePath([1]), true);
console.log(possiblePath([1, 2, 1]), true);
console.log(possiblePath(['H', 2, 1, 'H', 2]), false);
console.log(possiblePath([3, 'H', 2, 1]), false);
console.log(possiblePath(['H', 2, 3, 'H']), false);
console.log(possiblePath([1, 3, 4]), false);
