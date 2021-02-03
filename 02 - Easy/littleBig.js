const littleBig = (num) => {
  if (num % 2 === 0) {
    return 2 ** (num / 2 - 1) * 100;
  } else {
    return Math.floor(num / 2) + 5;
  }
};

// Tests
console.log(littleBig(1), 5);
console.log(littleBig(2), 100);
console.log(littleBig(3), 6);
console.log(littleBig(4), 200);
console.log(littleBig(5), 7);
console.log(littleBig(6), 400);
console.log(littleBig(7), 8);
console.log(littleBig(8), 800);
console.log(littleBig(9), 9);
console.log(littleBig(10), 1600);
console.log(littleBig(11), 10);
console.log(littleBig(12), 3200);
console.log(littleBig(13), 11);
console.log(littleBig(14), 6400);
console.log(littleBig(15), 12);
console.log(littleBig(16), 12800);
console.log(littleBig(17), 13);
console.log(littleBig(18), 25600);
console.log(littleBig(19), 14);
console.log(littleBig(20), 51200);
console.log(littleBig(21), 15);
console.log(littleBig(22), 102400);
console.log(littleBig(23), 16);
console.log(littleBig(24), 204800);
console.log(littleBig(25), 17);
console.log(littleBig(26), 409600);
console.log(littleBig(27), 18);
console.log(littleBig(28), 819200);
console.log(littleBig(29), 19);
console.log(littleBig(30), 1638400);
