const journeyDistance = (cost) => {
  const BASE_COST = 3;
  const ADDTL_COST = 2;

  if (cost < BASE_COST) {
    return 0;
  }

  if (cost === BASE_COST) {
    return 1;
  }

  return (cost - BASE_COST) / ADDTL_COST + 1;
};

// Tests
console.log(journeyDistance(0), 0);
console.log(journeyDistance(3), 1);
console.log(journeyDistance(5), 2);
console.log(journeyDistance(9), 4);
console.log(journeyDistance(15), 7);
console.log(journeyDistance(99), 49);
console.log(journeyDistance(11037), 5518);
