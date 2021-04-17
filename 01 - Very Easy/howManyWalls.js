const howManyWalls = (n, w, h) => Math.floor(n / (w * h));

// Tests
console.log(howManyWalls(100, 4, 5), 5);
console.log(howManyWalls(10, 15, 12), 0);
console.log(howManyWalls(41, 3, 6), 2);
console.log(howManyWalls(50, 11, 5), 0);
console.log(howManyWalls(1, 1, 1), 1);
