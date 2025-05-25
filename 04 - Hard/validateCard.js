// https://edabit.com/challenge/ceEEZioNmxuMJFMxi

const validateCard = (num) => { return; }

// Tests

console.log(validateCard(79927398714), false)
console.log(validateCard(79927398713), false, 'Passes Luhn test, but too short.')
console.log(validateCard(709092739800713), true)
console.log(validateCard(1234567890123456), false)
console.log(validateCard(12345678901237), true)
console.log(validateCard(5496683867445267), true)
console.log(validateCard(4508793361140566), false)
console.log(validateCard(376785877526048), true)
console.log(validateCard(36717601781975), false)