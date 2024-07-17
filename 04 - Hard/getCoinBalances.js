// https://edabit.com/challenge/PuGi7j9rm5nHBX8Ec

const getCoinBalances = (second) => {
  return;
};

// Tests

console.log(getCoinBalances(['share'], ['share']), [5, 5]);
console.log(getCoinBalances(['steal'], ['share']), [6, 2]);
console.log(getCoinBalances(['share'], ['steal']), [2, 6]);
console.log(getCoinBalances(['steal'], ['steal']), [3, 3]);

console.log(
  getCoinBalances(['share', 'share', 'share'], ['steal', 'share', 'steal']),
  [3, 11]
);
console.log(
  getCoinBalances(
    ['share', 'share', 'steal', 'share'],
    ['steal', 'steal', 'steal', 'steal']
  ),
  [0, 12]
);
console.log(
  getCoinBalances(['steal', 'steal', 'steal'], ['share', 'share', 'share']),
  [12, 0]
);
console.log(getCoinBalances(['share', 'share'], ['share', 'share']), [7, 7]);
console.log(
  getCoinBalances(
    ['share', 'steal', 'steal', 'steal'],
    ['share', 'share', 'steal', 'share']
  ),
  [11, 3]
);
console.log(
  getCoinBalances(
    ['share', 'share', 'steal', 'share'],
    ['steal', 'share', 'steal', 'steal']
  ),
  [3, 11]
);
