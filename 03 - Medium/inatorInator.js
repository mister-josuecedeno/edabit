const inatorInator = (inv) => {
  let lastLetter = inv.slice(-1);
  let regex = /[aeiou]/i;
  let dash = regex.test(lastLetter) ? '-' : '';
  return `${inv}${dash}inator ${inv.length}000`;
}

// Tests

console.log(inatorInator('Shrink'), 'Shrinkinator 6000')
console.log(inatorInator('Doom'),'Doominator 4000')
console.log(inatorInator('EvilClone'), 'EvilClone-inator 9000')
console.log(inatorInator('Destroy'),'Destroyinator 7000')
console.log(inatorInator('a'),'a-inator 1000')
console.log(inatorInator('Shrek'),'Shrekinator 5000')
console.log(inatorInator('bEE'),'bEE-inator 3000')
console.log(inatorInator('CAPITALISE'),'CAPITALISE-inator 10000')
