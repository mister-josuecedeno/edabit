const missingLetter = (str) => {
  let current, next;

  for (let i = 0; i < str.length - 1; i++) {
    current = str[i].charCodeAt(0);
    next = str[i + 1].charCodeAt(0);

    if (next !== current + 1) return String.fromCharCode(current + 1);
  }
  return 'No Missing Letter';
};

console.log(missingLetter('abdefg'), 'c', 'Example #1');
console.log(missingLetter('mnopqs'), 'r', 'Example #2');
console.log(missingLetter('tuvxyz'), 'w', 'Example #3');
console.log(missingLetter('jlm'), 'k');
console.log(missingLetter('rsu'), 't');
console.log(missingLetter('eghij'), 'f');
console.log(missingLetter('qrtuv'), 's');
console.log(missingLetter('ghijklmno'), 'No Missing Letter', 'Example #4');
console.log(missingLetter('xyz'), 'No Missing Letter');
