// https://edabit.com/challenge/WnfkPFXNMeT8C4c2z

// Not my solution

/**
 * Checks if the smaller array is a subarray of the larger array in order.
 * @param {number[]} smallArr - The smaller array to check for.
 * @param {number[]} bigArr - The larger array to search in.
 * @returns {boolean} True if the smaller array is an ordered subarray of the larger array, false otherwise.
 */
const isOrdSub = (smallArr, bigArr) => {
  let smallIndex = 0;

  for (let bigIndex = 0; bigIndex < bigArr.length; bigIndex++) {
    if (smallArr[smallIndex] === bigArr[bigIndex]) {
      smallIndex++;
    }

    if (smallIndex === smallArr.length) {
      return true;
    }
  }

  return false;
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
