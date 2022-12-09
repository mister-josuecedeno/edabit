// https://edabit.com/challenge/Q4jq2bky3TdCe8J3M

const countSubstring = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      count += (s.slice(i).match(/X/g) || []).length;
    }
  }

  return count;
};

// Tests

console.log(countSubstring('CAXAAYXZA'), 4);
console.log(countSubstring('AAXOXXA'), 6);
console.log(countSubstring('AXAXAXAXAX'), 15);
