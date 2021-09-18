const shortestDistance = (str) => {
  const [x1,y1,x2,y2] = str.split(',');
  let a = Math.pow(x2 - x1, 2);
  let b = Math.pow(y2 - y1, 2);
  return +Math.sqrt(a + b).toFixed(2);
}

// Tests

console.log(shortestDistance('1,1,2,1'), 1)
console.log(shortestDistance('1,1,3,1'), 2)
console.log(shortestDistance('-5,1,3,1'), 8)
console.log(shortestDistance('-5,2,3,1'), 8.06)
