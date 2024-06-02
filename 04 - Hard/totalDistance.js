// https://edabit.com/challenge/cFhKd3LzSD73vNKb8

function totalDistance(fuel, fuelUsage, passengers, airCon) {
  // Calculate the additional fuel consumption due to passengers
  let additionalConsumption = fuelUsage * (passengers * 0.05);

  // Calculate the total fuel consumption without air conditioning
  let totalFuelConsumption = fuelUsage + additionalConsumption;

  // If the air conditioning is on, increase the total fuel consumption by 10%
  if (airCon) {
    totalFuelConsumption *= 1.1;
  }

  // Calculate the maximum distance
  let distance = (fuel / totalFuelConsumption) * 100;

  // Round the distance to the nearest tenth
  return Math.round(distance * 10) / 10;
}

// Tests

console.log(totalDistance(30.0, 3.0, 0, false), 1000.0);
console.log(totalDistance(50.0, 7.0, 3, true), 564.7);
console.log(totalDistance(36.1, 8.6, 3, true), 331.8);
console.log(totalDistance(71.9, 12.1, 1, false), 565.9);
console.log(totalDistance(11.0, 11.0, 0, false), 100.0);
console.log(totalDistance(55.5, 5.5, 5, false), 807.3);
console.log(totalDistance(300.0, 25.0, 11, true), 703.8);
