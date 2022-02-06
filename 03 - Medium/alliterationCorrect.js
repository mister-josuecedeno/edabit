const alliterationCorrect = (sentence) => {
  return sentence
    .split(' ')
    .filter((w) => w.length > 3)
    .map((l) => l[0].toLowerCase())
    .every((l, i, arr) => l === arr[0]);
};

// Tests

console.log(alliterationCorrect('She swam to the shore.'), true);
console.log(alliterationCorrect('Maybel manages money well.'), false);
console.log(alliterationCorrect('He helps harness happiness.'), true);
console.log(alliterationCorrect('There are many animals in the zoo.'), false);
console.log(
  alliterationCorrect('Tanya took the tomatoes. Two times two is not twenty.'),
  true
);
console.log(alliterationCorrect('Two times two is four.'), false);
console.log(alliterationCorrect('Nancy nimbly ran for the newts.'), true);
