const findGlasses = (arr) => {
  const regex = /O-+O/gi;
  let match = 0;

  for (let i = 0; i < arr.length; i++) {
    match = arr[i].match(regex) !== null;
    if (match) return i;
  }

  return match;
};

// Tests
console.log(findGlasses(['phone', 'O-O', 'coins', 'keys']), 1);
console.log(findGlasses(['OO', 'wallet', 'O##O', 'O----O']), 3);
console.log(findGlasses(['O_O', 'O-O', 'OwO']), 1);
console.log(findGlasses(['O--#--O', 'dustO---Odust', 'more dust']), 1);
console.log(
  findGlasses([
    'floor',
    'the floor again',
    'pockets',
    'bed',
    'cabinet',
    'the top of my head O-O',
  ]),
  5
);
console.log(
  findGlasses(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O']),
  3
);

// Author: Joshua Señoron
