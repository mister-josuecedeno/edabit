// set-up
const tree = (h) => {
  let result = [];
  let plus = '';

  for (let i = 1; i <= h; i++) {
    result.push('#'.repeat(i) + plus);
    plus += '#';
  }

  return result;
};

// Tests

console.log(tree(1), ['#']);

console.log(tree(2), [' # ', '###']);

console.log(tree(5), [
  '    #    ',
  '   ###   ',
  '  #####  ',
  ' ####### ',
  '#########',
]);

console.log(tree(0), []);
