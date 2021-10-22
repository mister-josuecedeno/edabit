const scaleTip = (arr) => {
  let center = arr.indexOf('I');
  let left = arr.slice(0, center).reduce((acc,cv) => acc + cv, 0);
  let right = arr.slice(center + 1).reduce((acc,cv) => acc + cv, 0);
  if (left === right) return 'balanced';
  return left > right ? 'left' : 'right';
}

// Tests
console.log(scaleTip([0, 0, 0, "I", 1, 1, 1]), "right", "0 < 3 so it will tip right")
console.log(scaleTip([1, 2, 3, "I", 4, 0, 0]), "left", "6 > 4 so it will tip left")
console.log(scaleTip([5, 5, 5, "I", 10, 2, 3]), "balanced", "15 = 15 so it will stay balanced")
console.log(scaleTip([2, 3, 1, "I", 6, 0, 0]), "balanced")
console.log(scaleTip([500, 0, 0, "I", 32, 53, 12]), "left")
console.log(scaleTip([500, 0, 0, "I", 302, 53, 12]), "left")
console.log(scaleTip([50, 0, 0, "I", 32, 53, 12]), "right")
console.log(scaleTip([5, "I", 3]), "left")
console.log(scaleTip([500, 0, 0, "I", 500, 0, 0]), "balanced")
console.log(scaleTip([500, 0, 0, 0, 0, 0, "I", 32, 53, 12, 0, 0, 0]), "left")
console.log(scaleTip([1, 300, "I", 300, 1]), "balanced")
console.log(scaleTip([1, 300, "I", 300, 2]), "right")
