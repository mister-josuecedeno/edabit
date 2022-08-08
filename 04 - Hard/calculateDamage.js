// https://edabit.com/challenge/3hgkBd68EyYQF9YxG

// Set-up

const types = {
  fire: { water: 0.5, electric: 0 },
  grass: { water: 0, electric: 0, fire: 0 },
  electric: { fire: 0 },
};

const getDamage = (attack, defense, effectiveness) => {
  return 50 * (attack / defense) * effectiveness;
};

const calculateDamage = (yourType, opponentType, attack, defense) => {
  let effectiveness = types[yourType][opponentType];
  return getDamage(attack, defense, effectiveness);
};

// Tests

console.log(calculateDamage('fire', 'water', 100, 100), 25);
console.log(calculateDamage('grass', 'water', 100, 100), 100);
console.log(calculateDamage('electric', 'fire', 100, 100), 50);
console.log(calculateDamage('grass', 'electric', 57, 19), 150);
console.log(calculateDamage('grass', 'water', 40, 40), 100);
console.log(calculateDamage('grass', 'fire', 35, 5), 175);
console.log(calculateDamage('fire', 'electric', 10, 2), 250);
