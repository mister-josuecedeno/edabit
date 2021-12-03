const endsAddTo10 = (nums) => {
  const addsTo10 = (n) => {
    let arr = `${Math.abs(n)}`.split('');
    let first = +arr[0];
    let last = +arr[arr.length - 1];
    return first + last == 10; 
  }

  let count = 0;
  
  for (const num of nums) {
    count += addsTo10(num);
  }

  return count;  
}

// Tests

console.log(endsAddTo10([19, 46, 2098]), 3)
console.log(endsAddTo10([33, 44, -55]), 1)
console.log(endsAddTo10([]), 0)
console.log(endsAddTo10([-91, 55, -33]), 2)
console.log(endsAddTo10([100, -10, 1, 3, 2, 5, 2]), 1) // I think 5 should count.
console.log(endsAddTo10([19, 28, 37, 46, 55, 64, 73, 82, 91]), 9)
console.log(endsAddTo10([-19, -28, -37, -46, -55, -64, -73, -82, -91]), 9)
