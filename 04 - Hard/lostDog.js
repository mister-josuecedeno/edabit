function lostDog() {
  const dogPound = {};
  let dogCt = 1;
  let dog = '';

  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    let dogIndex = element.findIndex((n) => n === 0);

    if (dogIndex !== -1) {
      // console.log('Woof');
      dog = `Dog${dogCt}`;
      dogPound[dog] = `House (${i + 1}) and Room (${dogIndex + 1})`;
      dogCt++;
    }
  }
  return dogPound.hasOwnProperty('Dog1') ? dogPound : 'Dog not found!';
}

// Tests

console.log(
  lostDog(
    [1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1]
  ),
  {
    Dog1: 'House (1) and Room (6)',
    Dog2: 'House (2) and Room (1)',
    Dog3: 'House (3) and Room (2)',
    Dog4: 'House (4) and Room (3)',
  }
);
console.log(
  lostDog(
    [1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1]
  ),
  { Dog1: 'House (1) and Room (3)', Dog2: 'House (4) and Room (3)' }
);
console.log(
  lostDog(
    [1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
  ),
  { Dog1: 'House (1) and Room (3)' }
);
console.log(
  lostDog(
    [1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
  ),
  { Dog1: 'House (2) and Room (1)', Dog2: 'House (3) and Room (1)' }
);
console.log(
  lostDog(
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
  ),
  'Dog not found!'
);
console.log(
  lostDog(
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1]
  ),
  { Dog1: 'House (4) and Room (4)' }
);
