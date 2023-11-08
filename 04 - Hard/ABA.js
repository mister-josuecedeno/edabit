// https://edabit.com/challenge/aCiZ77cGuTrZMuwLF

// In Progress
const ABA = (s) => {
  // use ansii to define length
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  let side = '';
  return;
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
