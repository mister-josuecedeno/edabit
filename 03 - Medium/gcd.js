const gcd = (a,b) => {

  for (let i = Math.min(a,b); i >= 0; i--) {
    if(a % i === 0 && b % i === 0 ) return i;
  }
  
}

// Tests

console.log(gcd(6, 10), 2)
console.log(gcd(17, 85), 17)
console.log(gcd(18, 153), 9)
console.log(gcd(14, 14), 14)
console.log(gcd(6, 31), 1)
