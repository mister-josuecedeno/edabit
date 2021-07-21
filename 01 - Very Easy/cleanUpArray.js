const cleanUpArray = (arr) => {
  const clean = [[], []];
  const [even, odd] = clean;

  arr.forEach((n) => {
    if (n % 2 === 0) {
      even.push(+n);
    } else {
      odd.push(+n);
    }
  });

  return clean;
};

// Tests
console.log(cleanUpArray(['9', '4', '5', '8']), [
  [4, 8],
  [9, 5],
]);
console.log(cleanUpArray(['1', '4', '5', '4', '5', '8', '9']), [
  [4, 4, 8],
  [1, 5, 5, 9],
]);
console.log(
  cleanUpArray([
    '38',
    '80',
    '13',
    '73',
    '66',
    '70',
    '83',
    '6',
    '93',
    '9',
    '7',
    '8',
    '41',
  ]),
  [
    [38, 80, 66, 70, 6, 8],
    [13, 73, 83, 93, 9, 7, 41],
  ]
);
console.log(cleanUpArray(['3', '8', '0', '15', '2']), [
  [8, 0, 2],
  [3, 15],
]);
console.log(cleanUpArray(['5', '1', '7', '4', '8', '8']), [
  [4, 8, 8],
  [5, 1, 7],
]);
console.log(cleanUpArray(['8']), [[8], []]);
console.log(cleanUpArray(['2', '64', '16', '4', '72']), [
  [2, 64, 16, 4, 72],
  [],
]);
console.log(cleanUpArray(['7', '4', '8']), [[4, 8], [7]]);
console.log(cleanUpArray(['13', '16', '8', '22', '4', '29', '6', '20', '25']), [
  [16, 8, 22, 4, 6, 20],
  [13, 29, 25],
]);
console.log(cleanUpArray(['9', '3', '7', '4']), [[4], [9, 3, 7]]);
console.log(cleanUpArray(['15', '23', '14', '1', '27', '28', '30', '9']), [
  [14, 28, 30],
  [15, 23, 1, 27, 9],
]);
console.log(cleanUpArray(['9', '3', '8']), [[8], [9, 3]]);
console.log(cleanUpArray(['3', '26', '18', '17', '6', '8', '30']), [
  [26, 18, 6, 8, 30],
  [3, 17],
]);
console.log(cleanUpArray(['9', '5', '1', '3', '3', '8', '3', '6', '9']), [
  [8, 6],
  [9, 5, 1, 3, 3, 3, 9],
]);
console.log(cleanUpArray(['2', '11', '23', '22', '20', '9', '5', '7', '27']), [
  [2, 22, 20],
  [11, 23, 9, 5, 7, 27],
]);
console.log(cleanUpArray(['2', '1', '7', '4', '9', '6', '11']), [
  [2, 4, 6],
  [1, 7, 9, 11],
]);
console.log(cleanUpArray(['9', '4', '13', '1', '6', '5', '0', '3']), [
  [4, 6, 0],
  [9, 13, 1, 5, 3],
]);
console.log(cleanUpArray(['11']), [[], [11]]);
console.log(cleanUpArray(['3', '7', '21', '33', '5']), [[], [3, 7, 21, 33, 5]]);
