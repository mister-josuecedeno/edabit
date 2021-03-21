const sumOfVowels = (str) => {
  const vowels = {
    A: 4,
    E: 3,
    I: 1,
  };

  let total = 0;

  for (let chr of str.toUpperCase()) {
    total += vowels[chr] || 0;
  }

  return total;
};
