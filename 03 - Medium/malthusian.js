const malthusian = (foodGrowth, popMult) => {
  let foodProduction = 100;
  let population = 100;
  let year = 0;

  const isCatastrophe = () => {
    return population > foodProduction;
  }

  while(!isCatastrophe()){
    foodProduction += foodGrowth;
    population *= popMult;
    year++;
  }
  
  return year;
}

// Tests

console.log(malthusian(3900, 1.26), 31)
console.log(malthusian(3367, 1.16), 51)
console.log(malthusian(2393, 1.86), 9)
console.log(malthusian(6560, 1.66), 14)
console.log(malthusian(8481, 1.35), 26)
console.log(malthusian(3805, 1.98), 9)
console.log(malthusian(9492, 1.06), 166)
console.log(malthusian(8278, 1.35), 26)
console.log(malthusian(1228, 1.91), 7)
console.log(malthusian(4791, 1.25), 34)
console.log(malthusian(8194, 1.12), 78)
console.log(malthusian(7418, 1.63), 15)
console.log(malthusian(8700, 1.18), 51)

