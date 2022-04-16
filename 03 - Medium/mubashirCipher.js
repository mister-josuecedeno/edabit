const mubashirCipher = (message) => {
  var key = [
    ['m', 'c'],
    ['u', 'e'],
    ['b', 'g'],
    ['a', 'k'],
    ['s', 'v'],
    ['h', 'x'],
    ['i', 'z'],
    ['r', 'y'],
    ['p', 'w'],
    ['l', 'n'],
    ['o', 'j'],
    ['t', 'f'],
    ['q', 'd'],
  ];

  const flip = key.map((arr) => [arr[1], arr[0]]);
  key = [...key, ...flip];

  const getLetter = (letter) => {
    let cipher = key.filter((l) => l[0] === letter);
    return cipher.length == 0 ? letter : cipher[0][1];
  };

  return [...message].map((l) => getLetter(l)).join('');
};

// Tests

console.log(
  mubashirCipher('mubashir is not amazing'),
  'cegkvxzy zv ljf kckizlb'
);
console.log(mubashirCipher('edabit is amazing !'), 'uqkgzf zv kckizlb !');
console.log(mubashirCipher('%$ &%'), '%$ &%');
console.log(
  mubashirCipher('~!@#$%^&*()_+= -0 98 76 54 3 2 1'),
  '~!@#$%^&*()_+= -0 98 76 54 3 2 1'
);
console.log(mubashirCipher('matt && is amazing'), 'ckff && zv kckizlb');
console.log(mubashirCipher('evgeny sh is amazing'), 'usbulr vx zv kckizlb');
console.log(mubashirCipher('airforce needs me ?'), 'kzytjymu luuqv cu ?');
console.log(mubashirCipher('pakistan is love !'), 'wkazvfkl zv njsu !');
