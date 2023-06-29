// https://edabit.com/challenge/oXBcQsTa6bXoKwY6b

function roundabout(siz, dgr) {
  return `Exit ${Math.ceil((dgr + 30) / (360 / siz)) % siz}`;
}

// Tests

console.log(roundabout(4, 50), 'Exit 1');
console.log(roundabout(3, 180), 'Exit 2');
console.log(roundabout(6, 360), 'Exit 1');
console.log(roundabout(3, 100), 'Exit 2');
console.log(roundabout(5, 100), 'Exit 2');
console.log(roundabout(4, 320), 'Exit 0');
console.log(roundabout(2, 180), 'Exit 0');
console.log(roundabout(6, 250), 'Exit 5');
