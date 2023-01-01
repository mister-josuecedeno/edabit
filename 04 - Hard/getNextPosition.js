// https://edabit.com/challenge/BxiBhscoP5SSzQpGG

// skip this one
const getNextPosition = (pt1, pt2, dist) => {
  return;
};

// Tests

console.log(
  Test.inspect(getNextPosition({ x: 0, y: 0 }, { x: 100, y: 0 }, 10)),
  Test.inspect({ x: 10, y: 0 })
);
console.log(
  Test.inspect(getNextPosition({ x: 50, y: 60 }, { x: 100, y: 100 }, 10)),
  Test.inspect({ x: 58, y: 66 })
);
console.log(
  Test.inspect(getNextPosition({ x: 0, y: 0 }, { x: 100, y: 100 }, 10)),
  Test.inspect({ x: 7, y: 7 })
);
console.log(
  Test.inspect(getNextPosition({ x: 250, y: 10 }, { x: -20, y: 35 }, 55)),
  Test.inspect({ x: 195, y: 15 })
);
console.log(
  Test.inspect(getNextPosition({ x: 50, y: 0 }, { x: 70, y: 0 }, 30)),
  Test.inspect({ x: 80, y: 0 })
);
