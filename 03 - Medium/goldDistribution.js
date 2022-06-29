const goldDistribution = (gold) => {
  let Mubashir = 0;
  let Matt = 0;

  const getGold = () => {
    if (gold[0] >= gold[gold.length - 1]) {
      return gold.shift();
    } else {
      return gold.pop();
    }
  };

  while (gold.length > 0) {
    Mubashir += getGold();
    Matt += getGold();
  }

  return [Mubashir, Matt];
};

// Tests

console.log(goldDistribution([4, 2, 9, 5, 2, 7]), [14, 15]);
console.log(goldDistribution([4, 7, 2, 9, 5, 2]), [11, 18]);
console.log(goldDistribution([10, 1000, 2, 1]), [12, 1001]);
console.log(goldDistribution([10, 9, 1, 2, 8, 4]), [16, 18]);
console.log(goldDistribution([9, 32, 12, 43, 1, 55]), [130, 22]);
console.log(goldDistribution([19, 22, 1, 5, 7, 31]), [58, 27]);
console.log(goldDistribution([2, 2, 2, 2, 2, 2]), [6, 6]);
