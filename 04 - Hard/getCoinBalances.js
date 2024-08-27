// https://edabit.com/challenge/PuGi7j9rm5nHBX8Ec

// Not my solution

function getCoinBalances(actions1, actions2) {
  // Initial coin balances for both people
  let coins1 = 3;
  let coins2 = 3;

  // Iterate through both arrays simultaneously
  for (let i = 0; i < actions1.length; i++) {
      if (actions1[i] === "share" && actions2[i] === "share") {
          // Both share: each spends 1 coin and gains 3 coins
          coins1 += 2; // net gain is 3 - 1 = 2
          coins2 += 2;
      } else if (actions1[i] === "share" && actions2[i] === "steal") {
          // Person 1 shares, Person 2 steals
          coins1 -= 1; // Person 1 spends 1 coin
          coins2 += 3; // Person 2 gains 3 coins
      } else if (actions1[i] === "steal" && actions2[i] === "share") {
          // Person 1 steals, Person 2 shares
          coins1 += 3; // Person 1 gains 3 coins
          coins2 -= 1; // Person 2 spends 1 coin
      } else if (actions1[i] === "steal" && actions2[i] === "steal") {
          // Both steal: no one gains or loses coins
          // coins1 and coins2 remain the same
      }
  }

  // Return the final balances
  return [coins1, coins2];
}

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
