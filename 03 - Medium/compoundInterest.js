const compoundInterest = (principal, years, rate, periods) => {
  let amount = principal * Math.pow((1 + rate / periods),(periods * years));
  return +amount.toFixed(2);
}

// Tests

console.log(compoundInterest(100, 1, 0.05, 1), 105.0)
console.log(compoundInterest(3500, 15, 0.1, 4), 15399.26)
console.log(compoundInterest(100000, 20, 0.15, 365), 2007316.26)
