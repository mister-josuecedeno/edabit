const normalSequence = n => n % 8 == 0 ? 1 : [0,1,1,2,0,2,2,1][(n % 8)-1];

// Tests

console.log(normalSequence(20), 2)
console.log(normalSequence(8), 1)
console.log(normalSequence(41), 0)
console.log(normalSequence(48), 1)
console.log(normalSequence(148), 2)
console.log(normalSequence(163), 1)
console.log(normalSequence(111), 2)
console.log(normalSequence(118), 2)
console.log(normalSequence(117), 0)
console.log(normalSequence(90), 1)
console.log(normalSequence(91), 1)
console.log(normalSequence(95), 2)
