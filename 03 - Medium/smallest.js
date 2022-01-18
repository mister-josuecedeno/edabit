const smallest = (digits, value) => {
  let i = Math.pow(10, digits - 1);
  let isInteger = false; 
  
  while (!isInteger) {
    isInteger = Number.isInteger(i / value);
    if(!isInteger) i++;
  }

  return i; 
}

// Tests

console.log(smallest(3, 8), 104)
console.log(smallest(5, 12), 10008)
console.log(smallest(7, 1), 1000000)
console.log(smallest(2, 3), 12)
console.log(smallest(9, 33), 100000032)
console.log(smallest(8, 17), 10000012)
console.log(smallest(4, 67), 1005)
console.log(smallest(4, 432), 1296)
console.log(smallest(3, 432), 432)
console.log(smallest(3, 77), 154)