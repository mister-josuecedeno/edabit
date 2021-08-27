const millionsRounding = (arr) => {
  return arr.map((n) => [n[0], (n[1] / 1000000).toFixed() * 1000000]);
};

console.log(
  millionsRounding([
    ['Nice', 942208],
    ['Abu Dhabi', 1482816],
    ['Naples', 2186853],
    ['Vatican City', 572],
  ]),
  [
    ['Nice', 1000000],
    ['Abu Dhabi', 1000000],
    ['Naples', 2000000],
    ['Vatican City', 0],
  ]
);
