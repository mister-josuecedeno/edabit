// https://edabit.com/challenge/aCiZ77cGuTrZMuwLF

// In Progress
const ABA = (s) => {
  const positions = s.charCodeAt(0) - 64;
  let side = '';

  // next - set the current position

  for (let i = 0; i < positions; i++) {
    // appending the stat and end to create a new side
    //side = `${side}`
  }

  return positions;
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
