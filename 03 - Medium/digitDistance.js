const digitDistance = (num1, num2) => {
  let one = [...`${num1}`];
  let two = [...`${num2}`];
  return two.reduce((acc,cv,i) => acc + (cv - one[i]), 0);
}

// Tests

console.log(digitDistance(121, 599), 19)
console.log(digitDistance(12, 12), 0)
console.log(digitDistance(10, 20), 1)
console.log(digitDistance(12345678, 23456789), 8)
console.log(digitDistance(5555, 6666), 4)
console.log(digitDistance(105, 777), 15)
