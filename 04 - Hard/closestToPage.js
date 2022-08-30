// https://edabit.com/challenge/3fS4DBuMZYch3sn7Q

const closestToPage = (chapters, page) => {
  const arr = Object.entries(chapters);
  const diff = arr.map((c) => Math.abs(c[1] - page));
  const min = Math.min(...diff);
  const location = diff.lastIndexOf(min);

  return arr[location][0];
};

// Tests

let [objVector, resVector] = [
  [
    [{ 'Chapter 1': 1, 'Chapter 2': 15, 'Chapter 3': 37 }, 10],
    [
      {
        'New Beginnings': 1,
        'Strange Developments': 62,
        'The End?': 194,
        'The True Ending': 460,
      },
      200,
    ],
    [{ 'Chapter 1a': 1, 'Chapter 1b': 5 }, 3],
    [
      { 'Chapter 1a': 1, 'Chapter 1b': 5, 'Chapter 1c': 50, 'Chapter 1d': 100 },
      75,
    ],
    [
      {
        'Chapter 1a': 1,
        'Chapter 1b': 5,
        'Chapter 1c': 50,
        'Chapter 1d': 100,
        'Chapter 1e': 200,
      },
      150,
    ],
    [
      {
        'Chapter 1a': 1,
        'Chapter 1b': 5,
        'Chapter 1c': 50,
        'Chapter 1d': 100,
        'Chapter 1e': 200,
      },
      74,
    ],
    [
      {
        'Chapter 1a': 1,
        'Chapter 1b': 5,
        'Chapter 1c': 50,
        'Chapter 1d': 100,
        'Chapter 1e': 200,
        'Chapter 1f': 400,
      },
      300,
    ],
  ],
  [
    'Chapter 2',
    'The End?',
    'Chapter 1b',
    'Chapter 1d',
    'Chapter 1e',
    'Chapter 1c',
    'Chapter 1f',
  ],
];
for (let i in objVector)
  console.log(closestToPage(objVector[i][0], objVector[i][1]), resVector[i]);
