// https://edabit.com/challenge/kpSesJm9Frbi84eNB

const findRootsSum = (a, b, c) => {
  // Calculate the discriminant
  const discriminant = b * b - 4 * a * c;

  // Check the nature of the roots based on the discriminant
  if (discriminant > 0) {
    // Two distinct real roots
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    const sum = root1 + root2;
    return +sum.toFixed(2);
  } else if (discriminant === 0) {
    // One real root
    return 1;
  } else {
    // No real roots
    return 0;
  }
}

// Tests

console.log(findRootsSum(2, 4, -6), -2.00)
console.log(findRootsSum(3, 4, -3), -1.33)
console.log(findRootsSum(4, 3, -8), -0.75)
console.log(findRootsSum(5, 7, -2), -1.40)
console.log(findRootsSum(2, 4, 2), 1.00)
console.log(findRootsSum(3, 4, 3), 0.00)