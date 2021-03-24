const calculateScore = (games) => {
  // Player 1 is Abigail
  // Player 2 is Benson

  const wins = {};

  const winner = (game) => {
    const [Abigail, Benson] = game;

    const w = {
      R: 'S',
      S: 'P',
      P: 'R',
    };

    if (Abigail === Benson) return 'Tie';

    return w[Abigail] === Benson ? 'Abigail' : 'Benson';
  };

  for (let game of games) {
    let w = winner(game);
    wins[w] = wins[w] + 1 || 1;
  }

  if (wins.Benson === wins.Abigail) return 'Tie';
  return wins.Benson > wins.Abigail ? 'Benson' : 'Abigail';
};

// Tests
console.log(
  calculateScore([
    ['R', 'P'],
    ['R', 'S'],
    ['S', 'P'],
  ]),
  'Abigail'
);
console.log(
  calculateScore([
    ['R', 'R'],
    ['S', 'S'],
  ]),
  'Tie'
);
console.log(
  calculateScore([
    ['S', 'R'],
    ['R', 'S'],
    ['R', 'R'],
  ]),
  'Tie'
);
console.log(
  calculateScore([
    ['S', 'R'],
    ['P', 'R'],
  ]),
  'Tie'
);
console.log(
  calculateScore([
    ['S', 'S'],
    ['S', 'P'],
    ['R', 'S'],
    ['S', 'R'],
    ['R', 'R'],
  ]),
  'Abigail'
);
console.log(
  calculateScore([
    ['S', 'R'],
    ['S', 'R'],
    ['S', 'R'],
    ['R', 'S'],
    ['R', 'S'],
  ]),
  'Benson'
);
