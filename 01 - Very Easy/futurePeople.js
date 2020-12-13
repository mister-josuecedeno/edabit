// Solution

const futurePeople = (population, births) => {
  const yearsLeft = 30;
  const birthsPerYear = births * 12;
  return population + yearsLeft * birthsPerYear;
};

// Tests
console.log(futurePeople(256, 2), 976);
console.log(futurePeople(3248, 6), 5408);
console.log(futurePeople(5240, 3), 6320);
