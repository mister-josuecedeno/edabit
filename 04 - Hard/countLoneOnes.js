const countLoneOnes = (n) => {
  const regex = /(?<![1])[1](?![1])/g;
  return (`${n}`.match(regex) || []).length;
};

// Tests

console.log(countLoneOnes(101), 2);
console.log(countLoneOnes(1191), 1);
console.log(countLoneOnes(1111), 0);
console.log(countLoneOnes(11101), 1);
console.log(countLoneOnes(462), 0);
console.log(countLoneOnes(12131415161718191n), 9);
console.log(countLoneOnes(11231212111), 2);
console.log(countLoneOnes(1), 1);
console.log(countLoneOnes(0), 0);
