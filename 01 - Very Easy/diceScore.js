// Create a function that takes an array of
// five six-sided throw values and returns the final
// calculated dice score.

// Solution
const diceScore = (rolls) => {
  const rollValue = {
    111: 1000,
    666: 600,
    555: 500,
    444: 400,
    333: 300,
    222: 200,
    1: 100,
    5: 50,
  };

  let totalScore = 0;
  const sortedStr = rolls.sort().join('');

  for (let combination in rollValue) {
    let regex = new RegExp(combination);
    let found = sortedStr.match(regex);

    if (found !== null) {
      totalScore += rollValue[found[0]];
    }
  }

  return totalScore;
};
// Tests
console.log(diceScore([2, 3, 4, 6, 2]), 0);
console.log(diceScore([4, 4, 4, 3, 3]), 400);
console.log(diceScore([2, 4, 4, 5, 4]), 450);
