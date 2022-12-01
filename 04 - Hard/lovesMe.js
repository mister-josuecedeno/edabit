// https://edabit.com/challenge/wNfRFhnAefjJcXwQ4

const lovesMe = (n) => {
  const arr = new Array(n)
    .fill('Loves me')
    .map((l, i) => (i % 2 !== 0 ? 'Loves me not' : l));
  let last = arr.length - 1;
  return arr.map((l, i) => (i === last ? l.toUpperCase() : l)).join(', ');
};

// Tests

console.log(lovesMe(1), 'LOVES ME');
console.log(lovesMe(2), 'Loves me, LOVES ME NOT');
console.log(lovesMe(3), 'Loves me, Loves me not, LOVES ME');
console.log(lovesMe(4), 'Loves me, Loves me not, Loves me, LOVES ME NOT');
console.log(
  lovesMe(5),
  'Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(6),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(7),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(8),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(9),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(10),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(11),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(12),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(13),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(14),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(15),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(16),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(17),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(18),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(19),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(20),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(21),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(22),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(23),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(24),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(25),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(26),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(27),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(28),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(29),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(30),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(31),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(32),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(33),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(34),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(35),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(36),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(37),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(38),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(39),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(40),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(41),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(42),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(43),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(44),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(45),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(46),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(47),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(48),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(49),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(50),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(51),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(52),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(53),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(54),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(55),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(56),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(57),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(58),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(59),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(60),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(61),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(62),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(63),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(64),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(65),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(66),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(67),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(68),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
console.log(
  lovesMe(69),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME'
);
console.log(
  lovesMe(70),
  'Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT'
);
