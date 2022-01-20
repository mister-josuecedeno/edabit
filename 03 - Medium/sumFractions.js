const sumFractions = (arr) => {
  return Math.round(arr.reduce((acc,cv) => acc + (cv[0]/cv[1]), 0));
};

// Tests

console.log(sumFractions([[36, 4], [22, 60]]), 9)
console.log(sumFractions([[-11, 12], [18, 13], [4, 5]]), 1)
console.log(sumFractions([[11, 12], [18, 13], [4, 5]]), 3)
console.log(sumFractions([[18, 13], [4, 5]]), 2)
console.log(sumFractions([[41, 14], [10, 91]]), 3)
console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]), 11)
