const sortArray = (numbers) => {
  const sorted = [];

  // loop through sorted to find new index
  const insert = (num) => {
    // insert if empty
    if (sorted.length === 0) sorted.push(num);

    // insert where lowest
    sorted.forEach((el, index) => {
      if (!sorted.includes(num) && num < el) {
        return sorted.splice(index, 0, num);
      }
    });

    // push if higher than existing list
    if (!sorted.includes(num)) sorted.push(num);
  };

  // loop through arr n times
  for (const num of numbers) {
    insert(num);
  }

  return sorted;
};

// Tests
console.log(sortArray([2, -5, 1, 4, 7, 8]), [-5, 1, 2, 4, 7, 8]);
console.log(sortArray([23, 15, 34, 17, -28]), [-28, 15, 17, 23, 34]);
console.log(sortArray([38, 57, 45, 18, 47, 39]), [18, 38, 39, 45, 47, 57]);
console.log(sortArray([26, -1, -45, 74, 20]), [-45, -1, 20, 26, 74]);
