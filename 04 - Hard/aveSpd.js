const aveSpd = (upTime, upSpd, downSpd) => {
  const dist = upSpd * upTime;
  const downTime = dist / downSpd;

  return (dist * 2) / (upTime + downTime);
};

// Tests

console.log(aveSpd(18, 10, 30), 15);
console.log(aveSpd(18, 20, 60), 30);
console.log(aveSpd(30, 10, 30), 15);
console.log(aveSpd(30, 8, 24), 12);
