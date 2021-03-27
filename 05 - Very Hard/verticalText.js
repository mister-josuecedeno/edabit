const verticalText = (str) => {
  const words = str.split(' ');
  const max = Math.max(...words.map((word) => word.length));
  const result = [];

  for (let i = 0; i < max; i++) {
    result.push(words.map((word) => word[i] || ' '));
  }

  return result;
};

// Tests
console.log(verticalText('Holy bananas'), [
  ['H', 'b'],
  ['o', 'a'],
  ['l', 'n'],
  ['y', 'a'],
  [' ', 'n'],
  [' ', 'a'],
  [' ', 's'],
]);
console.log(verticalText('Hello fellas'), [
  ['H', 'f'],
  ['e', 'e'],
  ['l', 'l'],
  ['l', 'l'],
  ['o', 'a'],
  [' ', 's'],
]);
console.log(verticalText('I hope you have a great day'), [
  ['I', 'h', 'y', 'h', 'a', 'g', 'd'],
  [' ', 'o', 'o', 'a', ' ', 'r', 'a'],
  [' ', 'p', 'u', 'v', ' ', 'e', 'y'],
  [' ', 'e', ' ', 'e', ' ', 'a', ' '],
  [' ', ' ', ' ', ' ', ' ', 't', ' '],
]);
console.log(verticalText('Piri piri over there'), [
  ['P', 'p', 'o', 't'],
  ['i', 'i', 'v', 'h'],
  ['r', 'r', 'e', 'e'],
  ['i', 'i', 'r', 'r'],
  [' ', ' ', ' ', 'e'],
]);
console.log(verticalText('Skill the baboon king'), [
  ['S', 't', 'b', 'k'],
  ['k', 'h', 'a', 'i'],
  ['i', 'e', 'b', 'n'],
  ['l', ' ', 'o', 'g'],
  ['l', ' ', 'o', ' '],
  [' ', ' ', 'n', ' '],
]);
console.log(verticalText('He took one for the team'), [
  ['H', 't', 'o', 'f', 't', 't'],
  ['e', 'o', 'n', 'o', 'h', 'e'],
  [' ', 'o', 'e', 'r', 'e', 'a'],
  [' ', 'k', ' ', ' ', ' ', 'm'],
]);
console.log(verticalText('Schneid! 700 in to the face!'), [
  ['S', '7', 'i', 't', 't', 'f'],
  ['c', '0', 'n', 'o', 'h', 'a'],
  ['h', '0', ' ', ' ', 'e', 'c'],
  ['n', ' ', ' ', ' ', ' ', 'e'],
  ['e', ' ', ' ', ' ', ' ', '!'],
  ['i', ' ', ' ', ' ', ' ', ' '],
  ['d', ' ', ' ', ' ', ' ', ' '],
  ['!', ' ', ' ', ' ', ' ', ' '],
]);
console.log(verticalText('I hope you are ready for your daily dose of skill'), [
  ['I', 'h', 'y', 'a', 'r', 'f', 'y', 'd', 'd', 'o', 's'],
  [' ', 'o', 'o', 'r', 'e', 'o', 'o', 'a', 'o', 'f', 'k'],
  [' ', 'p', 'u', 'e', 'a', 'r', 'u', 'i', 's', ' ', 'i'],
  [' ', 'e', ' ', ' ', 'd', ' ', 'r', 'l', 'e', ' ', 'l'],
  [' ', ' ', ' ', ' ', 'y', ' ', ' ', 'y', ' ', ' ', 'l'],
]);
console.log(
  verticalText('0 11 222 3333 44444 6666666 77777777 888888888 9999999999'),
  [
    ['0', '1', '2', '3', '4', '6', '7', '8', '9'],
    [' ', '1', '2', '3', '4', '6', '7', '8', '9'],
    [' ', ' ', '2', '3', '4', '6', '7', '8', '9'],
    [' ', ' ', ' ', '3', '4', '6', '7', '8', '9'],
    [' ', ' ', ' ', ' ', '4', '6', '7', '8', '9'],
    [' ', ' ', ' ', ' ', ' ', '6', '7', '8', '9'],
    [' ', ' ', ' ', ' ', ' ', '6', '7', '8', '9'],
    [' ', ' ', ' ', ' ', ' ', ' ', '7', '8', '9'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '8', '9'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '9'],
  ]
);
