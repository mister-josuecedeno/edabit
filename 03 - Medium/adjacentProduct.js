const adjacentProduct = (arr) => {
  let max, current;

  for (let i = 0; i < arr.length; i++) {
    current = arr[i] * arr[i + 1];
    if(max === undefined || current > max){
      max = current;
    }
  }

  return max;
}

// Tests

console.log(adjacentProduct([3, 6, -2, -5, 7, 3]), 21)
console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23]) , 30)
console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]), 80)
console.log(adjacentProduct([1, 0, 1, 0, 1000]), 0)
console.log(adjacentProduct([-23, 4, -3, 8, -12]), -12)
console.log(adjacentProduct([-1, -2]), 2)
