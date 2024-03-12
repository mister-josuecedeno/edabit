// https://edabit.com/challenge/WnfkPFXNMeT8C4c2z

const isOrdSub = (smarr, bigarr) => {
  return;
};

// Tests

console.log(isOrdSub([4, 3], [3, 4]), false);
console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]), true);
console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]), true);
console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]), false);
console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]), true);
console.log(isOrdSub([0, 1, 0, 1], [1, 0, 1, 0, 1]), true);
console.log(isOrdSub([0, 1, 0, 1], [1, 1, 1, 1, 0, 0, 0, 1, 1, 0]), false);
console.log(
  isOrdSub([0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0]),
  false
);
console.log(
  isOrdSub(
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1]
  ),
  false
);
console.log(
  isOrdSub(
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
  ),
  true
);
