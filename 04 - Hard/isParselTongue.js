//

const isParselTongue = (sentence) => {
  return;
};

// Tests

console.log(isParselTongue('Sshe ssselects to eat that apple.'), true);
console.log(isParselTongue('She ssselects to eat that apple.'), false);
console.log(
  isParselTongue('You ssseldom sssspeak sso boldly, ssso messmerizingly.'),
  true
);
console.log(isParselTongue('Steve likes to eat pancakes'), false);
console.log(isParselTongue('Sssteve likess to eat pancakess'), true);
console.log(isParselTongue('Beatrice samples lemonade'), false);
console.log(isParselTongue('Beatrice enjoysss lemonade'), true);
