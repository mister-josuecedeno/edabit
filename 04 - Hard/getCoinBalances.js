// https://edabit.com/challenge/PuGi7j9rm5nHBX8Ec

const getCoins = (player, opponent) => {
  let coins = 0;
  if ((player = 'share')) coins -= 1;
  if ((opponent = 'share')) coins += 3;
  return coins;
};

const getCoinBalances = (arr1, arr2) => {
  let p1Coins = 3;
  let p2Coins = 3;

  for (let i = 0; i < arr1.length; i++) {
    let p1Action = arr1[i];
    let p2Action = arr2[i];

    p1Coins += getCoins(p1Action, p2Action);
    p2Coins += getCoins(p2Action, p1Action);
  }

  return [p1Coins, p2Coins];
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
