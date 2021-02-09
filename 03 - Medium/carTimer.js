const carTimer = (n) => {
  const hours = Math.floor(n / 60);
  const mins = n % 60;
  const clock = [...`${hours}${mins}`].reduce((acc, cv) => acc + +cv, 0);
  return clock;
};

// Tests
console.log(carTimer(240), 4);
console.log(carTimer(808), 14);
console.log(carTimer(1439), 19);
console.log(carTimer(0), 0);
console.log(carTimer(23), 5);
console.log(carTimer(8), 8);
