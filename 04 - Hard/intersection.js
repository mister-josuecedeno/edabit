// https://edabit.com/challenge/96PKn2siDra5D7oPD

// set-up
const intersection = (...a) => {
  return;
};

// Tests

console.log(intersection([1, 2, 3], [3, 4, 5], [3, 6, 7]), [3]);
console.log(
  intersection(
    ['cat', 'dog', 'mouse'],
    ['cat', 'dog', 'bat'],
    ['cat', 'dog', 'fly']
  ),
  ['cat', 'dog']
);
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
