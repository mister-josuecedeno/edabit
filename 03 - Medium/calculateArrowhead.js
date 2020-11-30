// Given an array of the arrows contained on a player's cards,
// return a singular string of arrowheads that are equivalent
// to all of the arrowheads.

// Worked Example
// calculateArrowhead([">>", "<<", "<<<"]) ➞ "<<<"
// >> means to move 2 places right
// << means to move 2 places left (cancelling out >>)
// <<< means to move a further 3 places left
// overall, the movement can be written as <<<

// Solution
const calculateArrowhead = (arr) => {
  let left = 0;
  let right = 0;
  let diff = 0;

  arr.forEach((arrow) => {
    if (arrow[0] === '>') {
      right += arrow.length;
    } else {
      left += arrow.length;
    }
  });

  diff = Math.abs(left - right);

  return left > right ? '<'.repeat(diff) : '>'.repeat(diff);
};

// Tests
console.log(calculateArrowhead(['>>>>', '<', '<', '<']), '>');
console.log(calculateArrowhead(['>', '<', '>>', '<', '<<<']), '<<');
console.log(calculateArrowhead(['>>>', '<<<']), '');
console.log(calculateArrowhead(['>>', '<<', '<<<']), '<<<');
console.log(
  calculateArrowhead([
    '>',
    '>>>>>',
    '>>>>',
    '>>>>>>>',
    '>>>>>>>>',
    '>>>>',
    '>>>>>>>>',
  ]),
  '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
);
console.log(
  calculateArrowhead([
    '<',
    '>>>>>>',
    '<<<<<<<<',
    '<<<<<<<<<<',
    '>>>>>>>',
    '>>>',
  ]),
  '<<<'
);
console.log(calculateArrowhead(['<<<<', '>>>>>']), '>');
console.log(
  calculateArrowhead([
    '<<<<<<<<<',
    '<<<<',
    '>>>',
    '>>>>>>>>',
    '>>>>>>>',
    '<<<<<',
  ]),
  ''
);
console.log(
  calculateArrowhead(['>>>>>>>>>>', '<<', '>>>>>>>>>>']),
  '>>>>>>>>>>>>>>>>>>'
);
console.log(
  calculateArrowhead(['>', '<<<', '>>>>>>>>>>', '>>>>>']),
  '>>>>>>>>>>>>>'
);
console.log(calculateArrowhead(['<<<<<<<<<', '>>>', '<<<<<']), '<<<<<<<<<<<');
console.log(calculateArrowhead(['>', '<<']), '<');
console.log(calculateArrowhead(['<<<', '<<', '<']), '<<<<<<');
console.log(calculateArrowhead(['<<', '<<<<<<<', '>>>>>>>>>']), '');
console.log(
  calculateArrowhead(['>>>>>', '>>>>>>>>', '<<<<<<', '<<<<', '<<<<<<<']),
  '<<<<'
);
console.log(
  calculateArrowhead(['>>', '<<<<<<<<<', '>>>>>>', '<<<<<']),
  '<<<<<<'
);
console.log(calculateArrowhead(['>>>>>>>>>>', '>>>', '<']), '>>>>>>>>>>>>');
console.log(
  calculateArrowhead(['<<', '>>>>>>', '<<', '>', '>>>', '<<<']),
  '>>>'
);
console.log(calculateArrowhead(['>', '>>>>>>>>>>', '<', '<<']), '>>>>>>>>');
console.log(calculateArrowhead(['<<<<', '>>>>', '>>', '<<<<<<<<<']), '<<<<<<<');
console.log(
  calculateArrowhead([
    '>>>>>>>',
    '>>',
    '<<<<<<<<<<',
    '>>>>',
    '>>>>>>>>>',
    '<<',
    '>>>>>>>>>',
  ]),
  '>>>>>>>>>>>>>>>>>>>'
);
console.log(
  calculateArrowhead(['<<<<<<<<<', '>>>>>>', '>>', '<<<<<<<']),
  '<<<<<<<<'
);
console.log(
  calculateArrowhead(['>>>', '<<<', '>>>>>>>>>>', '>>', '>>>', '<<', '<<<<<<']),
  '>>>>>>>'
);
console.log(
  calculateArrowhead([
    '>>>>>>>>>',
    '>>>>>>>>>',
    '<<<<<',
    '>>>>>>>>',
    '>>>>>>>',
  ]),
  '>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
);
