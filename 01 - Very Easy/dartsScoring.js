const dartsScoring = (x, y) => {
  // Calculate R
  let R = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  // Return Score
  if (R > 10) return 0;
  if (R <= 10 && R > 5) return 1;
  if (R <= 5 && R > 1) return 5;
  if (R <= 1) return 10;
};

// Tests

console.log(dartsScoring(-9, 9), 0);
console.log(dartsScoring(0, 10), 1);
console.log(dartsScoring(-5, 0), 5);
console.log(dartsScoring(0, -1), 10);
console.log(dartsScoring(0, 0), 10);
console.log(dartsScoring(-0.1, -0.1), 10);
console.log(dartsScoring(0.7, 0.7), 10);
console.log(dartsScoring(0.8, -0.8), 5);
console.log(dartsScoring(-3.5, 3.5), 5);
console.log(dartsScoring(-3.6, -3.6), 1);
console.log(dartsScoring(-7.0, 7.0), 1);
console.log(dartsScoring(7.1, -7.1), 0);
console.log(dartsScoring(0.5, -4), 5);
