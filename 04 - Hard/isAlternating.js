// https://edabit.com/challenge/eo6ThEtkDxYFipQew

const isAlternating = (num) => {
  if (num <= 0) return false;
  if (num < 10) return true;

  const numbers = [...`${num}`].map(n => n % 2);

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let next = numbers[i + 1];

    if (current == next) return false
  }

  return true;

}

// Tests

console.log(isAlternating(123), true, "Example #1")
console.log(isAlternating(67), true, "Example #2")
console.log(isAlternating(2380), false, "Example #3")
console.log(isAlternating(75), false, "Example #4")
console.log(isAlternating(3), true, "Trivially Alternating")
console.log(isAlternating(903), true)
console.log(isAlternating(444), false)
console.log(isAlternating(0), false, "Must be positive")
console.log(isAlternating(14589), true)
console.log(isAlternating(1234566789), false)
console.log(isAlternating(-12), false, "Must be positive")
console.log(isAlternating(10), true)