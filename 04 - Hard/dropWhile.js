const dropWhile = (arr, fn) => {
  const newArr = arr.map((a) => ({ ...a }));

  while (fn(newArr[0])) {
    newArr.shift();
  }

  return newArr;
};

// Tests

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'donny', active: true },
  { user: 'carl', active: false },
  { user: 'linda', active: false },
  { user: 'luke', active: false },
  { user: 'Steve', active: false },
  { user: 'Lyle', active: false },
  { user: 'pebbles', active: true },
];

console.log(
  dropWhile(users, function (o) {
    return !o.active;
  }),
  [
    {
      user: 'donny',
      active: true,
    },
    {
      user: 'carl',
      active: false,
    },
    {
      user: 'linda',
      active: false,
    },
    {
      user: 'luke',
      active: false,
    },
    {
      user: 'Steve',
      active: false,
    },
    {
      user: 'Lyle',
      active: false,
    },
    {
      user: 'pebbles',
      active: true,
    },
  ]
);

console.log(
  dropWhile(
    users,
    (b) =>
      JSON.stringify(b) === JSON.stringify({ user: 'barney', active: false })
  ),
  [
    {
      user: 'fred',
      active: false,
    },
    {
      user: 'donny',
      active: true,
    },
    {
      user: 'carl',
      active: false,
    },
    {
      user: 'linda',
      active: false,
    },
    {
      user: 'luke',
      active: false,
    },
    {
      user: 'Steve',
      active: false,
    },
    {
      user: 'Lyle',
      active: false,
    },
    {
      user: 'pebbles',
      active: true,
    },
  ]
);

console.log(
  dropWhile(users, (b) => b.user !== 'Lyle'),
  [
    {
      user: 'Lyle',
      active: false,
    },
    {
      user: 'pebbles',
      active: true,
    },
  ]
);
