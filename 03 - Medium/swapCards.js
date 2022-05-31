const swapCards = (n1, n2) => {
  // convert numbers to array
  const arr1 = n1.toString().split('');
  const arr2 = n2.toString().split('');

  // n1 lowest card
  const lowNum = `${Math.min(...arr1)}`;
  const lowIndex = arr1.indexOf(lowNum);

  // swap for n2[0]
  const tens = arr2[0].toString();
  arr1[lowIndex] = tens;
  arr2[0] = lowNum;

  // compare n1 > n2
  const compare = +arr1.join('') > +arr2.join('');

  return compare;
};

// Tests

console.log(swapCards(41, 98), true);
console.log(swapCards(12, 28), true);
console.log(swapCards(67, 53), false);
console.log(swapCards(77, 54), false);
console.log(swapCards(45, 23), false);
console.log(swapCards(74, 81), true);
console.log(swapCards(75, 35), true);
console.log(swapCards(21, 25), true);
console.log(swapCards(22, 34), true);
console.log(swapCards(24, 12), false);
console.log(swapCards(52, 46), true);
console.log(swapCards(88, 45), false);
console.log(swapCards(48, 54), true);
console.log(swapCards(75, 87), true);
console.log(swapCards(13, 12), true);
console.log(swapCards(25, 41), true);
console.log(swapCards(48, 14), false);
