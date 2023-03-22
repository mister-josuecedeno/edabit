// https://edabit.com/challenge/pwYsCgk8g7ZjC3d7p

const mirrorCipher = (message, key = 'abcdefghijklmnopqrstuvwxyz') => {
  message = message.toLowerCase();
  let newMessage = '';

  for (const letter of message) {
    let i = key.indexOf(letter);

    if (i === -1) {
      newMessage += letter;
      continue;
    }

    let mirror = key.length - i - 1;
    newMessage += key[mirror];
  }

  return newMessage;
};

// Tests

console.log(
  mirrorCipher('Mubashir Hassan', 'edabitisamazing'),
  'tuzishar hissid'
);
console.log(mirrorCipher('Matt MacPherson'), 'nzgg nzxksvihlm');
console.log(mirrorCipher('Airforce is best', 'pilot'), 'aorfirce os besp');
console.log(mirrorCipher('hello'), 'svool');
console.log(mirrorCipher('goodbye'), 'tllwybv');
console.log(mirrorCipher('ngmlsoor'), 'mtnohlli');
console.log(mirrorCipher('gsrh rh z hvxivg'), 'this is a secret');
console.log(mirrorCipher('hello', 'abcdefgh'), 'adllo');
console.log(mirrorCipher('goodbye', ''), 'goodbye');
console.log(mirrorCipher('this is a secret', ' *'), 'this*is*a*secret');
