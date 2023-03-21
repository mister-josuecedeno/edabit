// https://edabit.com/challenge/pwYsCgk8g7ZjC3d7p

// refactor - need to better understand 'mirror'
// ' how far is the letter from the left'
// 'the mirror is that far from the right'
const mirrorCipher = (message, key = 'abcdefghijklmnopqrstuvwxyz') => {
  message = message.toLowerCase();
  let newMessage = '';
  let i = 1;

  for (const letter of message) {
    if (letter === ' ') {
      i = 1;
      newMessage += letter;
    } else {
      newMessage += key[key.length - i];
      i++;
    }
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
