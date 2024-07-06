// https://edabit.com/challenge/5N2g3vGhjhy2QcviD

// Not my answer

const chars = {
  Knight: [120, 140, 6],
  Warrior: [180, 71, 8],
  Fairy: [71, 100, 16],
  Robot: [160, 120, 11],
  Giant: [160, 200, 4],
};

const weapons = [50, 40, 30, 20, 10, 0].map((v) => [v, v * 2]);
const armor = [100, 80, 60, 40, 20, 0].map((v) => [v, v * 1.5]);
const boots = [15, 12, 9, 6, 3, 0].map((v) => [v, 8 * v]);

function maxStats(character, gold) {
  const bestEquip = (eqList) => eqList.find((v) => v[1] <= gold)[0];
  let r = chars[character];
  [weapons, armor, boots].forEach((v, i) => (r[i] += bestEquip(v)));
  return r;
}

// Tests

console.log(maxStats('Robot', 160), [210, 220, 26]);
console.log(maxStats('Knight', 80), [160, 180, 15]);
console.log(maxStats('Giant', 200), [210, 300, 19]);
console.log(maxStats('Fairy', 90), [111, 160, 25]);
console.log(maxStats('Warrior', 110), [230, 131, 20]);
