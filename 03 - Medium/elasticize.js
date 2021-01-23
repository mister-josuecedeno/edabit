const elasticize = (str) => {
  const len = str.length;
  let l = '';
  let p = '';
  let r = '';

  if (len < 3) return str;

  let half = Math.floor(len / 2);
  let left = str.slice(0, half);
  let pivot = str[half];
  let right = str.slice(half + (len % 2));

  for (let i = 0; i < half; i++) {
    l += left[i].repeat(i + 1);
    r += right[i].repeat(half - i);
  }

  p = len % 2 ? pivot.repeat(Math.ceil(len / 2)) : '';

  return [l, p, r].join('');
};

// Tests
console.log(elasticize('ANNA'), 'ANNNNA', 'Example #1');
console.log(elasticize('KAYAK'), 'KAAYYYAAK', 'Example #2');
console.log(elasticize('X'), 'X', 'Example #3');
console.log(elasticize('AA'), 'AA');
console.log(elasticize('ABC'), 'ABBC');
console.log(elasticize('BOB'), 'BOOB');
console.log(elasticize('OTTO'), 'OTTTTO');
console.log(elasticize('LEVEL'), 'LEEVVVEEL');
console.log(elasticize('IJKCBA'), 'IJJKKKCCCBBA');
console.log(elasticize('REDDER'), 'REEDDDDDDEER');
console.log(elasticize('ROTATOR'), 'ROOTTTAAAATTTOOR');
