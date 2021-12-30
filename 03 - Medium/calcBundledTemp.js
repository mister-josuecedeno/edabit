const calcBundledTemp = (n, temp) => {
  return (Number.parseInt(temp) * Math.pow(1.1, n)).toFixed(1) + '*C';
}

// Tests

console.log(calcBundledTemp(2, "10*C"), "12.1*C")
console.log(calcBundledTemp(1, "2*C"), "2.2*C")
console.log(calcBundledTemp(4, "6*C"), "8.8*C")
console.log(calcBundledTemp(20, "4*C"), "26.9*C")
console.log(calcBundledTemp(5, "20*C"), "32.2*C")
console.log(calcBundledTemp(20, "3*C"), "20.2*C")
console.log(calcBundledTemp(5, "18*C"), "29.0*C")
console.log(calcBundledTemp(4, "5*C"), "7.3*C")
console.log(calcBundledTemp(16, "17*C"), "78.1*C")
console.log(calcBundledTemp(15, "2*C"), "8.4*C")
console.log(calcBundledTemp(14, "10*C"), "38.0*C")
