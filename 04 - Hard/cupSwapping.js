// https://edabit.com/challenge/5DCC9SzA2FTcCTvkd

const cupSwapping = (swaps) => {
  let position = 'B';

  for (const swap of swaps) {
    if (swap.search(position) != -1) {
      let regex = new RegExp(`[^${position}]`, 'g');
      position = swap.match(regex)[0];
    }
  }

  return position;
};

// Tests

console.log(cupSwapping(['AB', 'CA']), 'C');
console.log(cupSwapping(['AB', 'CA', 'AB']), 'C');
console.log(cupSwapping(['AC', 'CA', 'CA', 'AC']), 'B');
console.log(cupSwapping(['BA', 'AC', 'CA', 'BC']), 'A');
console.log(cupSwapping(['BC', 'CB', 'CA', 'BA']), 'A');
console.log(cupSwapping(['BC']), 'C');
console.log(cupSwapping(['BA', 'CA', 'CB', 'CA']), 'B');
console.log(cupSwapping([]), 'B');
