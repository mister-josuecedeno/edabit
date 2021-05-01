function simpleComp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}

// Tests

lst1 = [121, 144, 19, 161, 19, 144, 19, 11];
lst2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(simpleComp(lst1, lst2), true);
lst1 = [4, 4];
lst2 = [1, 31];
console.log(simpleComp(lst1, lst2), false);
lst1 = [121, 144, 19, 161, 19, 144, 19, 11];
lst2 = [
  11 * 21,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(simpleComp(lst1, lst2), false);
lst1 = [121, 144, 19, 161, 19, 144, 19, 11];
lst2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  190 * 190,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(simpleComp(lst1, lst2), false);
lst1 = [];
lst2 = [];
console.log(simpleComp(lst1, lst2), true);
lst1 = [];
lst2 = null;
console.log(simpleComp(lst1, lst2), false);
lst1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008];
lst2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  190 * 190,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(simpleComp(lst1, lst2), false);
lst1 = [10000000, 100000000];
lst2 = [10000000 * 10000000, 100000000 * 100000000];
console.log(simpleComp(lst1, lst2), true);
lst1 = [10000001, 100000000];
lst2 = [10000000 * 10000000, 100000000 * 100000000];
console.log(simpleComp(lst1, lst2), false);
lst1 = [2, 2, 3];
lst2 = [4, 9, 9];
console.log(simpleComp(lst1, lst2), false);
lst1 = [2, 2, 3];
lst2 = [4, 4, 9];
console.log(simpleComp(lst1, lst2), true);
lst1 = null;
lst2 = [];
console.log(simpleComp(lst1, lst2), false);
console.log(simpleComp([], [1]), false);
lst1 = [-121, -144, 19, -161, 19, -144, 19, -11];
lst2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(simpleComp(lst1, lst2), true);
lst1 = [42, 42];
lst2 = [42, 42];
console.log(simpleComp(lst1, lst2), false);
//Mubashir
