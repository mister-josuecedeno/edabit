const possiblePath = (arr) => {
  let isPossible = true;
  let isPreviousValid, isNextValid;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 'H') continue;
    
    isPreviousValid = arr[i - 1] == 'H' || typeof arr[i - 1] == 'undefined';
    isNextValid = arr[i + 1] == 'H' || typeof arr[i + 1] == 'undefined';

    if(!isPreviousValid || !isNextValid) {
      isPossible = false;
      break;
    };
  }

  return isPossible;
}


// Tests

console.log(possiblePath([1, 'H', 2, 'H', 3, 'H', 4]), true)
console.log(possiblePath(['H', 3, 'H']), true)
console.log(possiblePath(['H']), true)
console.log(possiblePath([3]), true)
console.log(possiblePath([1, 2, 'H', 3]), false)
console.log(possiblePath(['H', 1, 3]), false)
console.log(possiblePath([2, 4, 'H']), false)
console.log(possiblePath([1, 'H', 1, 'H', 1, 'H']), true)
console.log(possiblePath([3, 'H', 2, 'H', 3, 'H', 1]), true)
console.log(possiblePath(['H', 2, 'H', 3, 4, 'H', 1, 'H', 2, 'H']), false)