// https://edabit.com/challenge/jiTMjanCzDrtC8T9y

const currentlyWinning = (scores) => {
  // Split scores into two arrays (Yours and Opponents)
  const even = scores.filter((score, index) => index % 2 === 0);
  const odd = scores.filter((score, index) => index % 2 !== 0);

  // Calculate the cumulative scores for each team
  const evenCumulative = even.map((score, index) => even.slice(0, index + 1).reduce((acc, curr) => acc + curr, 0));
  const oddCumulative = odd.map((score, index) => odd.slice(0, index + 1).reduce((acc, curr) => acc + curr, 0));

  // Compare the cumulative scores and return the result
  const result = evenCumulative.map((score, index) => {
    if (score > oddCumulative[index]) return 'Y';
    if (score < oddCumulative[index]) return 'O';
    return 'T';
  });

  return result;
}

// Tests

console.log(currentlyWinning([10, 10, 22, 30, 5, 40]), ['T', 'O', 'O'])
console.log(currentlyWinning([5, 1, 2, 10]), ['Y', 'O'])
console.log(currentlyWinning([10, 10, 5, 5, 2, 2, 1, 3, 100, 5]), ['T', 'T', 'T', 'O', 'Y'])
console.log(currentlyWinning([5, 15, 17, 35, 16, 40, 66, 12, 10, 9]), ['O', 'O', 'O', 'Y', 'Y'])
console.log(currentlyWinning([33, 22, 4, 9, 12, 15, 32, 7, 9, 10, 70, 100]), ['Y', 'Y', 'Y', 'Y', 'Y', 'O'])