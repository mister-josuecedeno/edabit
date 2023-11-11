// https://edabit.com/challenge/aCiZ77cGuTrZMuwLF

const ABA = (s) => {
  const positions = s.charCodeAt(0) - 64;
  let current = '';
  let result = '';

  for (let i = 0; i < positions; i++) {
    current = String.fromCharCode(65 + i);
    result = result + current + result;
  }

  return result;
};

// Tests

console.log(ABA('A'), 'A');
console.log(ABA('B'), 'ABA');
console.log(ABA('C'), 'ABACABA');
console.log(ABA('D'), 'ABACABADABACABA');
console.log(ABA('E'), 'ABACABADABACABAEABACABADABACABA');
console.log(
  ABA('F'),
  'ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA'
);
console.log(
  ABA('G'),
  'ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA'
);
