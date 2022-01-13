const negativeSum = (chars) => {
  const regex = /-\d+/g;
  return chars.match(regex).reduce((acc,cv) => acc + +cv, 0);
}

// Tests

console.log(negativeSum("-12 13%14&-11"), -23)
console.log(negativeSum("-12 13%14&-2 0 12 -4"), -18)
console.log(negativeSum("33%14&-1 12 a 21 -2 b c"), -3)
console.log(negativeSum("22 13%14&-11-22 13 12"), -33)
console.log(negativeSum("-12 -8"), -20)
