const CharCount = (text) => {
  const charMap = {};
  const regex = /[a-z]/gi;
  const word = text.match(regex).join('').toLowerCase();

  // Character Map
  for (const char of word) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  // Sorted
  const sorted = Object.fromEntries(
    Object.entries(charMap).sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }

      if (a[0] > b[0]) {
        return 1;
      }
    })
  );

  // Stringify
  let result = '';

  for (const property in sorted) {
    result += `${property}:${sorted[property]} `;
  }

  return result.slice(0, -1);
};

// Tests
console.log(
  CharCount('Hello world!'),
  'd:1 e:1 h:1 l:3 o:2 r:1 w:1',
  'Wrong result!'
);

console.log(
  CharCount('Now, I learn JavaScript'),
  'a:3 c:1 e:1 i:2 j:1 l:1 n:2 o:1 p:1 r:2 s:1 t:1 v:1 w:1',
  'Wrong result!'
);

console.log(
  CharCount('Cheers, love! Hahaha.'),
  'a:3 c:1 e:3 h:4 l:1 o:1 r:1 s:1 v:1',
  'Wrong result!'
);

console.log(
  CharCount('Guess I won’t be using that.'),
  'a:1 b:1 e:2 g:2 h:1 i:2 n:2 o:1 s:3 t:3 u:2 w:1',
  'Wrong result!'
);

console.log(
  CharCount('Ando en buena racha. ¡Fuera de mi camino!'),
  'a:6 b:1 c:2 d:2 e:4 f:1 h:1 i:2 m:2 n:4 o:2 r:2 u:2',
  'Wrong result!'
);

console.log(
  CharCount('I’m on fire! Touch me, and you’ll get burned.'),
  'a:1 b:1 c:1 d:2 e:4 f:1 g:1 h:1 i:2 l:2 m:2 n:3 o:3 r:2 t:2 u:3 y:1',
  'Wrong result!'
);
