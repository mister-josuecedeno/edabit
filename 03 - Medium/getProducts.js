const getProducts = (arr) => {
  return arr.map((n, i, a) => a.filter(f => f !== a[i]).reduce((acc,cv) => acc * cv, 1));
}

// Tests

console.log(getProducts([1, 2, 6, 5, 9]), [540, 270, 90, 108, 60])
console.log(getProducts([1, 7, 3, 4]), [84, 12, 28, 21])
console.log(getProducts([1, 2, 3, 0, 5]), [0, 0, 0, 30, 0])
