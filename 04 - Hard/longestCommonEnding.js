// https://edabit.com/challenge/FGuBhmmvXgkvvTQHc

const longestCommonEnding = (str1, str2) => {
  arr1 = [...str1];
  arr2 = [...str2];
  let isEqual = true;
  let result = [];

  while (isEqual) {
    let l1 = arr1.pop();
    let l2 = arr2.pop();

    if (l1 == l2) {
      result.unshift(l1);
      continue;
    }

    break;
  }

  return result.join('');
};

// Tests

console.log(longestCommonEnding('pitiful', 'beautiful'), 'tiful');
console.log(longestCommonEnding('truck', 'trick'), 'ck');
console.log(longestCommonEnding('vote', 'asymptote'), 'ote');
console.log(longestCommonEnding('multiplication', 'ration'), 'ation');
console.log(longestCommonEnding('potent', 'tent'), 'tent');
console.log(longestCommonEnding('skyscraper', 'carnivore'), '');
