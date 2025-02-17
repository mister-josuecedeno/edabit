// https://edabit.com/challenge/Wx5EF6o38tAY2stmh

const getSwaps = (str, pair) => {
  const compare = pair.repeat(Math.ceil(str.length / 2)).slice(0, -1);
  let swaps = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== compare[i]) swaps++;
  }
  return swaps;
}

const minSwaps = (str) => {
  const pairs = ['01', '10'];
  return Math.min(...pairs.map(pair => getSwaps(str, pair)));
}

// Tests

console.log(minSwaps("010010111"), 4)
console.log(minSwaps("010101010"), 0)
console.log(minSwaps("101010100"), 1)
console.log(minSwaps("101010000"), 2)
console.log(minSwaps("101000000"), 3)
console.log(minSwaps("10001"), 1)
console.log(minSwaps("10010"), 2)