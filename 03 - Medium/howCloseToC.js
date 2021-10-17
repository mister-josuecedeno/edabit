const howCloseToC = (rapidity) => {
  return (1 / Math.cosh(2 * rapidity)).toExponential(2);
}

// Tests

console.log(howCloseToC(3.14), "3.75e-3")
console.log(howCloseToC(42), "6.61e-37")
console.log(howCloseToC(355), "8.95e-309")
