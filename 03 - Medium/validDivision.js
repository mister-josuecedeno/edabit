const validDivision = (d) => {
  let result = eval(d);
  let divByZero = d.split('/')[1] == 0;
  return divByZero ? 'invalid' : Number.isInteger(result);
}

// Tests

console.log(validDivision("6/3"), true)
console.log(validDivision("30/25"), false)
console.log(validDivision("0/3"), true, "0/3 equals 0, 0 is a whole number without decimals")
console.log(validDivision("13/12"), false)
console.log(validDivision("329/329"), true)
console.log(validDivision("0/0"), "invalid")
console.log(validDivision("10/0"), "invalid")
console.log(validDivision("20/5"), true)
