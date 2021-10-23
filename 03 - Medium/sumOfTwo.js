const sumOfTwo = (a, b, v) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if(a[i] + b[j] === v) return true;
    }
  }
  return false;
}

// Tests

console.log(sumOfTwo([1,2,3], [10,20,30,40,50], 42), true)
console.log(sumOfTwo([1,2,3], [10,20,30,40,50], 44), false)
console.log(sumOfTwo([1,2,3], [10,20,30,40,50], 11), true)
console.log(sumOfTwo([1,2,3], [10,20,30,40,50], 60), false)
console.log(sumOfTwo([1,2,3], [10,20,30,40,50], 53), true)
console.log(sumOfTwo([1,2,3], [10,20,30,40,50], 4), false)
