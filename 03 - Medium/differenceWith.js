// Not my solution
const differenceWith = (arrVal, othVal, comp) => {
  return arrVal.filter(x => othVal.every(y => !comp(x, y)));
}

// Tests

console.log(
  differenceWith(
    [
      { make: "mazda", engine: "v8" },
      { make: "toyota", engine: "v6" },
    ],
    [{ make: "toyota", engine: "v8" }],
    (a, b) => a.engine === b.engine
  ),
  [{ make: "toyota", engine: "v6" }]
);

console.log(
  differenceWith(
    [
      ["banana", "cat", "car"],
      ["house", "pajamas", "watch"],
      ["nickle", "dime", "quarter"],
    ],
    [
      ["banana", "cat", "car"],
      ["house", "pajamas", "watch"],
    ],
    (a, b) => a.includes("banana") && b.includes("banana")
  ),
  [
    ["house", "pajamas", "watch"],
    ["nickle", "dime", "quarter"],
  ]
);

console.log(
  differenceWith(
    [
      { make: "mazda", engine: "v8" },
      { make: "toyota", engine: "v6" },
    ],
    [{ make: "toyota", engine: "v6" }],
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
  ),
  [{ make: "mazda", engine: "v8" }]
);