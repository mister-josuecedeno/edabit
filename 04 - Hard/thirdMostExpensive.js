// https://edabit.com/challenge/3hDDMWvmMQ6pFqqmg

const thirdMostExpensive = (obj) => {
  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return sorted.length < 3 ? false : sorted[2][0];
};

// Tests

console.log(thirdMostExpensive({}), false);
console.log(thirdMostExpensive({ piano: 100 }), false);
console.log(thirdMostExpensive({ piano: 100, stereo: 200 }), false);
console.log(thirdMostExpensive({ piano: 100, stereo: 200, tv: 10 }), 'tv');
console.log(
  thirdMostExpensive({ piano: 100, stereo: 200, tv: 10, timmy: 500 }),
  'piano'
);
console.log(
  thirdMostExpensive({
    computer: 1000,
    piano: 500,
    stereo: 200,
    tv: 10,
    timmy: 1,
  }),
  'stereo'
);
