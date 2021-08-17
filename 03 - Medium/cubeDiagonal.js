const cubeDiagonal = (volume) => {
  return +(Math.cbrt(volume) * Math.sqrt(3)).toFixed(2);
};

// Tests
console.log(cubeDiagonal(8), 3.46);
console.log(cubeDiagonal(343), 12.12);
console.log(cubeDiagonal(1157.625), 18.19);
console.log(cubeDiagonal(12), 3.97);
console.log(cubeDiagonal(1), 1.73);
console.log(cubeDiagonal(48), 6.29);
console.log(cubeDiagonal(1728), 20.78);
