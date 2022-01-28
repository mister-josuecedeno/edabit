const faceInterval = (num) => {
  if (!Array.isArray(num)) return ':/';
  const interval = Math.max(...num) - Math.min(...num);
  return num.includes(interval) ? ':)' : ':(';
};

// Tests

console.log(faceInterval([1, 2, 5, 8, 3, 9]), ':)');
console.log(faceInterval([5, 2, 8, 3, 11]), ':(');
console.log(faceInterval([20, 50, 13, 60, 22, 72, 99]), ':(');
console.log(faceInterval([11, 42, 83, 28, 47, 94]), ':)');
console.log(faceInterval('bruh'), ':/');
