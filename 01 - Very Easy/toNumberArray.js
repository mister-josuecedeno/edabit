const toNumberArray = (arr) => {
  return arr.map((n) => +n);
};

// Tests

console.log(toNumberArray(['1', '2']), [1, 2]);
console.log(toNumberArray(['3', '4']), [3, 4]);
console.log(toNumberArray(['5', '6']), [5, 6]);
console.log(toNumberArray(['7', '8']), [7, 8]);
console.log(toNumberArray(['9', '10']), [9, 10]);
console.log(toNumberArray(['91', '44']), [91, 44]);
console.log(toNumberArray(['19', '14']), [19, 14]);
console.log(toNumberArray(['29', '34']), [29, 34]);
console.log(toNumberArray(['0', '4']), [0, 4]);
console.log(toNumberArray(['21', '23']), [21, 23]);
console.log(toNumberArray(['12', '25']), [12, 25]);
console.log(toNumberArray(['99', '20']), [99, 20]);
console.log(
  toNumberArray(['9', '4', '5', '6', '7', '8', '9']),
  [9, 4, 5, 6, 7, 8, 9]
);
console.log(
  toNumberArray(['11', '14', '13', '12', '3', '6']),
  [11, 14, 13, 12, 3, 6]
);
console.log(
  toNumberArray(['7', '14', '16', '18', '19', '20']),
  [7, 14, 16, 18, 19, 20]
);
console.log(toNumberArray(['9.4', '4.2']), [9.4, 4.2]);
console.log(
  toNumberArray([
    '1.4',
    '4.4',
    '5.7',
    '4.3',
    '9.8',
    '5.3',
    '8.7',
    '8.6',
    '9.8',
  ]),
  [1.4, 4.4, 5.7, 4.3, 9.8, 5.3, 8.7, 8.6, 9.8]
);
console.log(toNumberArray(['9.5', '8.8']), [9.5, 8.8]);
console.log(toNumberArray(['3.4', '8.6']), [3.4, 8.6]);
console.log(
  toNumberArray(['5.9', '1.5', '7.8', '4.9', '8.5', '8.4']),
  [5.9, 1.5, 7.8, 4.9, 8.5, 8.4]
);
console.log(toNumberArray(['8.7']), [8.7]);
console.log(toNumberArray(['7.0', '4.7', '8.4']), [7, 4.7, 8.4]);
console.log(
  toNumberArray(['7.2', '9.7', '4.0', '9.7', '6.5']),
  [7.2, 9.7, 4, 9.7, 6.5]
);
console.log(toNumberArray(['9.3', '3.9', '7.9', '4.7']), [9.3, 3.9, 7.9, 4.7]);
console.log(toNumberArray(['4.1', '2.9', '1.7']), [4.1, 2.9, 1.7]);
console.log(toNumberArray(['9.0', '3.8', '8.8']), [9, 3.8, 8.8]);
console.log(
  toNumberArray(['6.0', '6.9', '3.7', '6.9', '8.3', '7.8', '1.5', '2.6']),
  [6, 6.9, 3.7, 6.9, 8.3, 7.8, 1.5, 2.6]
);
console.log(
  toNumberArray([
    '9.2',
    '5.8',
    '1.3',
    '3.4',
    '3.0',
    '8.5',
    '3.4',
    '6.8',
    '9.9',
  ]),
  [9.2, 5.8, 1.3, 3.4, 3, 8.5, 3.4, 6.8, 9.9]
);
console.log(toNumberArray(['8.3', '9.7', '8.0']), [8.3, 9.7, 8]);
console.log(
  toNumberArray(['2.1', '1.7', '7.0', '4.7', '9.3', '6.8', '9.1', '9.1']),
  [2.1, 1.7, 7, 4.7, 9.3, 6.8, 9.1, 9.1]
);
console.log(
  toNumberArray(['9.8', '4.6', '7.3', '7.4', '1.9', '6.3', '8.7']),
  [9.8, 4.6, 7.3, 7.4, 1.9, 6.3, 8.7]
);
console.log(toNumberArray(['2.4']), [2.4]);
