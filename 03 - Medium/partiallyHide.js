const partiallyHide = (phrase) => {
  return phrase
            .split(' ')
            .map(word => {
              let first = word[0];
              let last = word[word.length - 1];
              let dash = '-'.repeat(word.length - 2);
              return `${first}${dash}${last}`;})
            .join(' ');
};

// Tests

console.log(partiallyHide('Harry went to fight the basilisk'), 'H---y w--t to f---t t-e b------k')
console.log(partiallyHide('She rolled her eyes'), 'S-e r----d h-r e--s')
console.log(partiallyHide('skies were so beautiful'), 's---s w--e so b-------l')
console.log(partiallyHide('red is not my color'), 'r-d is n-t my c---r')
console.log(partiallyHide('so many options'), 'so m--y o-----s')
console.log(partiallyHide('the orient express'), 't-e o----t e-----s')
console.log(partiallyHide('went to the post office'), 'w--t to t-e p--t o----e')
