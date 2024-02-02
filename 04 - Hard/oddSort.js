// https://edabit.com/challenge/NhkHhyK7hSCAdLCeZ

const oddSort = (arr) => {
  const odds = (arr.filter((number) => number % 2 != 0) || []).sort();
  let oddIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      arr[i] = odds[oddIndex];

      oddIndex++;
    }
  }

  return arr;
};

// Tests

console.log(oddSort([1, 8, 4, 3, 2, 6, 7, 5]), [1, 8, 4, 3, 2, 6, 5, 7]);
console.log(oddSort([3, 7, 0, 9, 3, 2, 4, 8]), [3, 3, 0, 7, 9, 2, 4, 8]);
console.log(oddSort([7, 5, 2, 3, 1]), [1, 3, 2, 5, 7]);
console.log(oddSort([2, 2, 9, 7, 4, 4, 4, 9]), [2, 2, 7, 9, 4, 4, 4, 9]);
console.log(oddSort([2, 2, 4, 0, 3, 1]), [2, 2, 4, 0, 1, 3]);
console.log(oddSort([2, 2, 8, 4]), [2, 2, 8, 4]);
console.log(oddSort([1, 9, 1]), [1, 1, 9]);
