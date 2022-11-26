// https://edabit.com/challenge/TGCRiLbcdoTK9uwdZ

const decision = (hand, face) => {
  // Your hand
  const colors = hand.map((c) => c.split(' ')[0]);
  const numbers = hand.map((c) => c.split(' ')[1]);

  // Current card
  const [color, number] = face.split(' ');

  // Check hand
  const hasColor = colors.includes(color);
  const hasNumber = numbers.includes(number);
  if (hasColor || hasNumber) hand.pop();

  // Result
  if (hand.length === 0) return 'You won!';
  if (hand.length === 1) return 'Uno!';
  return 'Keep going...';
};

// Tests

console.log(decision(['yellow 3', 'red 3'], 'red 10'), 'Uno!');
console.log(decision(['blue 1'], 'blue 5'), 'You won!');
console.log(decision(['red 1'], 'blue 5'), 'Uno!');
console.log(decision(['red 1', 'blue 10'], 'blue 5'), 'Uno!');
console.log(
  decision(['red 1', 'blue 10', 'green 7'], 'blue 5'),
  'Keep going...'
);
console.log(decision(['red 1', 'green 7'], 'green 2'), 'Uno!');
console.log(decision(['green 7'], 'green 2'), 'You won!');
console.log(decision(['blue 7'], 'green 7'), 'You won!');
console.log(
  decision(['blue 1', 'green 2', 'yellow 4', 'red 2'], 'blue 5'),
  'Keep going...'
);
