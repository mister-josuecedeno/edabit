const time = (obj, people, walls) => {
  let val = (obj.minutes / obj.walls) * obj.people;
  return (val * walls) / people;
};

// Tests

const rate = {
  people: 4,
  walls: 9,
  minutes: 63,
};
const rate2 = {
  people: 10,
  walls: 10,
  minutes: 22,
};

console.log(time(rate, 7, 4), 16);
console.log(time(rate2, 10, 10), 22);
