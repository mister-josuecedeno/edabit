const apocalyptic = (n) => {
  let days = `${BigInt(2) ** BigInt(n)}`.indexOf('666');
  return days === -1
    ? 'Crisis averted. Resume sinning.'
    : `Repent! ${days} days until the Apocalypse!`;
};

// Tests
console.log(apocalyptic(157), 'Repent! 9 days until the Apocalypse!');
console.log(apocalyptic(175), 'Crisis averted. Resume sinning.');
console.log(apocalyptic(220), 'Repent! 6 days until the Apocalypse!');
console.log(apocalyptic(333), 'Crisis averted. Resume sinning.');
console.log(apocalyptic(499), 'Repent! 138 days until the Apocalypse!');
console.log(apocalyptic(666), 'Repent! 49 days until the Apocalypse!');
console.log(apocalyptic(1003), 'Crisis averted. Resume sinning.');
