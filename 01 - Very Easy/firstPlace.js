// Create a function that takes a string road and
// returns the car that's in first place. The road will be
// made of "=", and cars will be represented by letters in the alphabet.

// Solution
const firstPlace = (road) => {
  if (road === '') return 'No road available';

  for (let i = road.length - 1; i >= 0; i--) {
    if (road[i] !== '=') return road[i];
  }

  return 'No car available';
};

// Test
console.log(firstPlace('====b===O===e===U=A=='), 'A');
console.log(firstPlace('e==B=Fe'), 'e');
console.log(firstPlace('proeNeoOJGnfl'), 'l');
console.log(firstPlace('F============='), 'F');
console.log(firstPlace('C===A===R'), 'R');
console.log(firstPlace('p'), 'p');
console.log(firstPlace('=========================='), 'No car available');
console.log(firstPlace(''), 'No road available');
