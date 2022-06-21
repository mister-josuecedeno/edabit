const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

const tree = (h) => {
  const result = [];
  let plus = '';

  for (let i = 1; i <= h; i++) {
    result.push('#'.repeat(i) + plus);
    plus += '#';
  }

  let l = (result[result.length - 1] || []).length;
  return result.map((r) => pad(r, l));
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
