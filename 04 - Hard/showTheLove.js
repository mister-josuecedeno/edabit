const showTheLove = (numbers) => {
  let min = Math.min(...numbers);
  let amtRemoved =
    numbers.filter((n) => n !== min).reduce((a, c) => a + c, 0) * 0.25;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === min) {
      numbers[i] = numbers[i] + amtRemoved;
    } else {
      numbers[i] = numbers[i] - numbers[i] * 0.25;
    }
  }

  return numbers;
};

// Tests

console.log(showTheLove([4, 1, 4]), [3, 3, 3]);
console.log(showTheLove([16, 10, 8]), [12, 7.5, 14.5]);
// console.log(showTheLove([2, 100]), [27, 75]);
// console.log(showTheLove([75, 64, 55]), [56.25, 48.0, 89.75]);
// console.log(showTheLove([84, 94, 26, 80, 16]), [63.0, 70.5, 19.5, 60.0, 87.0]);
// console.log(showTheLove([55, 27]), [41.25, 40.75]);
// console.log(showTheLove([13, 80, 75, 45, 11]), [
//   9.75,
//   60.0,
//   56.25,
//   33.75,
//   64.25,
// ]);
// console.log(showTheLove([48, 28, 18]), [36.0, 21.0, 37.0]);
// console.log(showTheLove([17, 9]), [12.75, 13.25]);
// console.log(showTheLove([38, 23, 31, 16]), [28.5, 17.25, 23.25, 39.0]);
// console.log(showTheLove([54, 62, 59]), [84.25, 46.5, 44.25]);
// console.log(showTheLove([44, 46]), [55.5, 34.5]);
// console.log(showTheLove([21, 97, 45, 58]), [71.0, 72.75, 33.75, 43.5]);
// console.log(showTheLove([43, 9]), [32.25, 19.75]);
// console.log(showTheLove([53, 0, 14, 58]), [39.75, 31.25, 10.5, 43.5]);
// console.log(showTheLove([16, 19, 42, 43, 6]), [12.0, 14.25, 31.5, 32.25, 36.0]);
// console.log(showTheLove([26, 17, 28, 31, 79]), [
//   19.5,
//   58.0,
//   21.0,
//   23.25,
//   59.25,
// ]);
// console.log(showTheLove([47, 57, 18, 2, 72]), [35.25, 42.75, 13.5, 50.5, 54.0]);
// console.log(showTheLove([27, 77]), [46.25, 57.75]);
// console.log(showTheLove([22, 52]), [35.0, 39.0]);
// console.log(showTheLove([85, 49, 60, 78, 6]), [63.75, 36.75, 45.0, 58.5, 74.0]);
// console.log(showTheLove([96, 38]), [72.0, 62.0]);
// console.log(showTheLove([29, 73, 81]), [67.5, 54.75, 60.75]);
// console.log(showTheLove([51, 46, 81, 85]), [38.25, 100.25, 60.75, 63.75]);
// console.log(showTheLove([26, 48, 84, 70, 8]), [19.5, 36.0, 63.0, 52.5, 65.0]);
// console.log(showTheLove([69, 64]), [51.75, 81.25]);
// console.log(showTheLove([33, 26, 39, 58]), [24.75, 58.5, 29.25, 43.5]);
// console.log(showTheLove([4, 51, 66]), [33.25, 38.25, 49.5]);
// console.log(showTheLove([0, 52, 83, 55, 40]), [57.5, 39.0, 62.25, 41.25, 30.0]);
// console.log(showTheLove([39, 3, 36, 52, 25]), [29.25, 41.0, 27.0, 39.0, 18.75]);
// console.log(showTheLove([32, 78, 12]), [24.0, 58.5, 39.5]);
// console.log(showTheLove([75, 51, 24]), [56.25, 38.25, 55.5]);
// console.log(showTheLove([42, 21, 93, 47]), [31.5, 66.5, 69.75, 35.25]);
// console.log(showTheLove([72, 97, 26, 1]), [54.0, 72.75, 19.5, 49.75]);
// console.log(showTheLove([90, 45, 12]), [67.5, 33.75, 45.75]);
// console.log(showTheLove([37, 47, 82]), [69.25, 35.25, 61.5]);
// console.log(showTheLove([54, 11]), [40.5, 24.5]);
// console.log(showTheLove([78, 86, 19, 46, 51]), [
//   58.5,
//   64.5,
//   84.25,
//   34.5,
//   38.25,
// ]);
// console.log(showTheLove([7, 31, 74, 69]), [50.5, 23.25, 55.5, 51.75]);
// console.log(showTheLove([100, 26, 3, 28, 19]), [
//   75.0,
//   19.5,
//   46.25,
//   21.0,
//   14.25,
// ]);
// console.log(showTheLove([87, 29, 92, 57]), [65.25, 88.0, 69.0, 42.75]);
// console.log(showTheLove([64, 24]), [48.0, 40.0]);
// console.log(showTheLove([82, 89, 52, 25, 50]), [
//   61.5,
//   66.75,
//   39.0,
//   93.25,
//   37.5,
// ]);
// console.log(showTheLove([90, 17, 11]), [67.5, 12.75, 37.75]);
// console.log(showTheLove([14, 24, 27]), [26.75, 18.0, 20.25]);
// console.log(showTheLove([21, 4]), [15.75, 9.25]);
// console.log(showTheLove([70, 64, 25, 16]), [52.5, 48.0, 18.75, 55.75]);
// console.log(showTheLove([50, 17, 87, 20]), [37.5, 56.25, 65.25, 15.0]);
// console.log(showTheLove([60, 27, 56]), [45.0, 56.0, 42.0]);
// console.log(showTheLove([99, 21]), [74.25, 45.75]);
// console.log(showTheLove([80, 0, 45, 84]), [60.0, 52.25, 33.75, 63.0]);
