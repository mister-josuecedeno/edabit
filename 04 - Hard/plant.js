const getStem = (water) => `-`.repeat(water);
const getFlower = (seed, fert) => seed.repeat(fert);
const inRange = (temp) => temp >= 20 && temp <= 30;

const plant = (seed, water, fert, temp) => {
  let p = '';
  for (let i = 0; i < water; i++) {
    p += getStem(water);
    if (inRange(temp)) p += getFlower(seed, fert);
  }

  return `${p}${inRange(temp) ? '' : seed}`;
};

// Tests

console.log(plant('@', 3, 3, 25), '---@@@---@@@---@@@', 'Example #1');
console.log(plant('#', 1, 5, 30), '-#####', 'Example #2');
console.log(
  plant('§', 5, 1, 20),
  '-----§-----§-----§-----§-----§',
  'Example #3'
);
console.log(plant('&', 3, 3, 15), '---------&', 'Example #4');
console.log(plant('🍁', 2, 6, 28), '--🍁🍁🍁🍁🍁🍁--🍁🍁🍁🍁🍁🍁');
console.log(plant('🍃', 4, 2, 22), '----🍃🍃----🍃🍃----🍃🍃----🍃🍃');
console.log(plant('€', 4, 10, 38), '----------------€');
