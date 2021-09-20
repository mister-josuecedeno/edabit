const mathExpr = (expr) => {
  const regex = /[0-9]\s*[\+\-\*\/\%]\s*[0-9]/gi;
  return regex.test(expr);
}

// Tests

console.log(mathExpr("5+4"), true)
console.log(mathExpr("4 * 5"), true)
console.log(mathExpr("3*6"), true)
console.log(mathExpr("4 - 5"), true)
console.log(mathExpr("6 % 7"), true)
console.log(mathExpr("a - b"), false)
console.log(mathExpr("a - 2"), false)
console.log(mathExpr("nope"), false)
