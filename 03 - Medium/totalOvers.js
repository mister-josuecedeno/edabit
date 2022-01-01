const totalOvers = (nBalls) => {
  return +[Math.floor(nBalls / 6) , nBalls % 6].join('.');
}

// Tests

console.log(totalOvers(2400), 400)
console.log(totalOvers(164), 27.2)
console.log(totalOvers(945), 157.3)
console.log(totalOvers(5), 0.5)
console.log(totalOvers(7), 1.1)
console.log(totalOvers(15), 2.3)
console.log(totalOvers(0), 0)
