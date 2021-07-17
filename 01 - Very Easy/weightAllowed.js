const weightAllowed = (car, p, maxWeight) => {
  const maxLb = maxWeight * 2.2;
  const totalWeight = car + p.reduce((acc, cv) => acc + cv, 0);
  return totalWeight < maxLb;
};

// Tests

console.log(weightAllowed(3000, [150, 201, 75, 88, 195], 1700), true);
console.log(weightAllowed(3200, [220, 101, 115, 228, 15], 1700), false);
console.log(weightAllowed(2900, [225, 171, 300, 274, 191], 1850), true);
console.log(weightAllowed(3550, [180, 201, 140, 99, 204], 1980), false);
console.log(weightAllowed(4500, [157, 154, 75, 88, 190], 2400), true);
console.log(weightAllowed(4000, [150, 200, 79, 80, 159], 2000), false);
