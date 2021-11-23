const sumDigits = (a, b) => {
  const sum = (n) => {
    return `${n}`.split('').reduce((acc, cv) => acc + +cv, 0);
  }

  let total = 0;

  for (let i = a; i <= b; i++) {
    total += sum(i);    
  }
  
  return total;
}

// Tests

console.log(sumDigits(7, 8), 15)
console.log(sumDigits(17, 20), 29)
console.log(sumDigits(10, 12), 6)
console.log(sumDigits(500, 506), 56)
console.log(sumDigits(66, 789), 9324)
