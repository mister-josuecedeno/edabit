// Create a function that takes damage and speed (attacks per second)
// and returns the amount of damage after a given time.
// Return "invalid" if damage or speed is negative.

// solution
const damage = (damage, speed, time) => {
  if (damage < 0 || speed < 0) {
    return 'invalid';
  }

  const seconds = {
    second: 1,
    minute: 60,
    hour: 3600,
  };

  return damage * (speed * seconds[time]);
};

// Tests
console.log(damage(40, 5, 'second'), 200);
console.log(damage(100, 1, 'minute'), 6000);
console.log(damage(2, 100, 'hour'), 720000);
console.log(damage(20, 0.5, 'minute'), 600);
console.log(damage(2, 400, 'hour'), 2880000);
console.log(damage(-23, 20, 'second'), 'invalid');
console.log(damage(-23, -5, 'second'), 'invalid');
console.log(damage(20, -492321, 'hour'), 'invalid');
