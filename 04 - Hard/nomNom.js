// https://edabit.com/challenge/dHAk8zPwacSev6Hmv

const nomNom = (arr) => {
  const result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum <= arr[i + 1] || arr[i + 1] === undefined) {
      result.push(sum);
      sum = 0;
    }
  }

  return result;
};

// Tests

console.log(
  nomNom([1, 2, 3]),
  [1, 2, 3],
  '1 cannot eat 2, so numbers remain uneaten.'
);
console.log(
  nomNom([2, 1, 3]),
  [3, 3],
  '2 can eat 1 to become 3. 3 cannot eat 3.'
);
console.log(
  nomNom([8, 5, 9]),
  [22],
  '8 eats 5 to become 13, 13 eats 9 to become 22.'
);
console.log(
  nomNom([5, 3, 7]),
  [15],
  '5 eats 3 to become 8. 8 eats 7 to become 15.'
);
console.log(nomNom([5, 3, 9]), [8, 9], '5 eats 3 to become 8. 8 cannot eat 9.');
console.log(
  nomNom([6, 5, 6, 100]),
  [17, 100],
  '6 eats 5 to become 11. 11 eats 7 to become 17. 17 cannot eat 100.'
);
