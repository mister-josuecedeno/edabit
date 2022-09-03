// https://edabit.com/challenge/96PKn2siDra5D7oPD

// Not my solution

/*
const intersection = (a, ...b) => {
  a = a.map(JSON.stringify);
  let int = [];
  for (let i of b)
    for (let j of i.map(JSON.stringify))
      if (a.includes(j) && !int.includes(j))
        int.push(j);
  return int.map(JSON.parse);
};
*/

// Following works for arrays but not objects

const getMatches = (obj1, obj2) => {
  // this works for arrays but not objects

  const matches = obj1.filter((e) => {
    return obj2.includes(e);
  });

  return matches;
};

const intersection = (...a) => {
  const [first, ...others] = a;
  const matches = new Set();

  for (let i = 0; i < others.length; i++) {
    matches.add(getMatches(first, others[i]).join(', '));
  }

  return [...matches];
};

// Tests

/*
console.log(intersection([1, 2, 3], [3, 4, 5], [3, 6, 7]), [3]);

console.log(
  intersection(
    ['cat', 'dog', 'mouse'],
    ['cat', 'dog', 'bat'],
    ['cat', 'dog', 'fly']
  ),
  ['cat', 'dog']
);

*/

console.log(
  intersection(
    [
      {
        color: 'red',
        make: 'toyota',
      },
      {
        color: 'blue',
        make: 'mazda',
      },
    ],
    [
      {
        color: 'green',
        make: 'tesla',
      },
      {
        color: 'blue',
        make: 'mazda',
      },
    ],
    [
      {
        color: 'yellow',
        make: 'ford',
      },
      {
        color: 'blue',
        make: 'mazda',
      },
    ]
  ),
  [
    {
      color: 'blue',
      make: 'mazda',
    },
  ]
);
