const floatSum = (A, B) => {
  const decimals = (n) => {
    return (`${n}`.split('.')[1] || []).length;
  }

  const pow10 = (a,b) => {
    let pow = Math.max(decimals(a), decimals(b));
    return Math.pow(10, pow);
  }
  
  const cf = pow10(A, B);  // correction factor
  
  return ((A * cf) + (B * cf)) / cf;
}


// Tests

console.log(floatSum(0.1, 0.2), 0.3)
console.log(floatSum(0.2, 0.3), 0.5)
console.log(floatSum(8.4, 8.8), 17.2)
console.log(floatSum(5.7, 4.3), 10)
console.log(floatSum(5, 0.81), 5.81)
console.log(floatSum(0.81, 99), 99.81)
console.log(floatSum(99.1, 0.109), 99.209)
console.log(floatSum(50.1234, 11.5678), 61.6912)
console.log(floatSum(3.4444, 3.5555), 6.9999)
console.log(floatSum(2.12022, 1.110001), 3.230221)
