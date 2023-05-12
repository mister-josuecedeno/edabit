// https://edabit.com/challenge/Q7oSiYdNJvvDYHdmR

const combineArrays = (arr1, arr2, arr3) => {
  const length = Math.max(arr1.length, arr2.length, arr3.length);
  const result = [];

  for (let i = 0; i < length; i++) {
    let one = typeof arr1[i] == 'undefined' ? '*' : arr1[i];
    let two = typeof arr2[i] == 'undefined' ? '*' : arr2[i];
    let three = typeof arr3[i] == 'undefined' ? '*' : arr3[i];
    result.push([one, two, three]);
  }

  return result;
};

// Tests

console.log(
  combineArrays(
    [false, 'false'],
    ['true', true, 'bool'],
    ['null', 'undefined']
  ),
  [
    [false, 'true', 'null'],
    ['false', true, 'undefined'],
    ['*', 'bool', '*'],
  ]
);
console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]), [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
]);
console.log(
  combineArrays(
    ['Jack', 'Joe', 'Jill'],
    ['Stuart', 'Sammy', 'Silvia'],
    ['Rick', 'Raymond', 'Riri']
  ),
  [
    ['Jack', 'Stuart', 'Rick'],
    ['Joe', 'Sammy', 'Raymond'],
    ['Jill', 'Silvia', 'Riri'],
  ]
);
console.log(
  combineArrays(['JS', 'TS', 'CS'], ['React', 'Vue', 'Angular'], ['C', 'C++']),
  [
    ['JS', 'React', 'C'],
    ['TS', 'Vue', 'C++'],
    ['CS', 'Angular', '*'],
  ]
);
