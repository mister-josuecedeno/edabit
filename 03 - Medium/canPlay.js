const canPlay = (hand, face) => {
  const [color, number] = face.split(' ');
  const cards = hand.flat().join(' ');
  return cards.includes(color) || cards.includes(number);
};

// Tests

console.log(canPlay(['yellow 3', 'yellow 5', 'red 8'], 'red 2'), true);
console.log(canPlay(['yellow 3', 'yellow 5', 'red 8'], 'blue 5'), true);
console.log(
  canPlay(['yellow 3', 'blue 5', 'red 8', 'red 9'], 'green 4'),
  false
);
console.log(canPlay(['yellow 3', 'red 8'], 'green 2'), false);
console.log(
  canPlay(['yellow 5', 'yellow 8', 'red 0', 'blue 0', 'green 4'], 'green 2'),
  true
);
console.log(canPlay([], 'green 2'), false);
console.log(canPlay(['red 2'], 'red 0'), true);
console.log(canPlay(['red 2', 'red 8', 'red 5'], 'blue 1'), false);
