const getTriangleType = (sides) => {
  if(sides.length !== 3) return 'not a triangle';

  const sideMap = {};
  const types = {
    3: 'scalene',
    2: 'isosceles',
    1: 'equilateral'
  }

  for (const side of sides) {
    sideMap[side] = sideMap[side] + 1 || 1;
  }
  
  return types[Object.keys(sideMap).length];
}

// Tests

console.log(getTriangleType([2, 3, 4]), "scalene")
console.log(getTriangleType([4, 4, 7]), "isosceles")
console.log(getTriangleType([8, 8, 8]), "equilateral")
console.log(getTriangleType([3, 5, 5, 2]), "not a triangle")
console.log(getTriangleType([4, 4, 1]), "isosceles")
console.log(getTriangleType([4, 4, 2]), "isosceles")
console.log(getTriangleType([3, 1, 3]), "isosceles")
console.log(getTriangleType([1]), "not a triangle")
