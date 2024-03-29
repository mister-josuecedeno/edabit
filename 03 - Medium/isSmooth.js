const isSmooth = (sentence) => {
  const spaces = sentence.match(/\s/g).length;
  const smooth = (
    sentence
      .toLowerCase()
      .match(/[a-z] [a-z]/g)
      .filter((l) => l[0] === l[2]) || []
  ).length;
  return smooth === spaces;
};

// Tests

console.log(
  isSmooth('Marta appreciated deep perpendicular right trapezoids'),
  true
);
console.log(isSmooth('Someone is outside the doorway'), false);
console.log(isSmooth('She eats super righteously'), true);
console.log(isSmooth('Ben naps so often'), true);
console.log(isSmooth('Cute triangles are cute'), false);
console.log(isSmooth('Mad dislikes sharp pointy yoyos'), true);
console.log(isSmooth('Rita asks Sam mean numbered dilemmas'), true);
console.log(isSmooth('Marigold daffodils streaming happily.'), false);
console.log(isSmooth('Simply wonderful laughing.'), false);
