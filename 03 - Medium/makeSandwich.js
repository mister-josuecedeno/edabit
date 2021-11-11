const makeSandwich = (ingredients, flavour) => {
  const sandwich = ingredients.map(i => i === flavour ? ['bread', i, 'bread'] : i);
  return sandwich.flat(Infinity);
}

// Tests

console.log(makeSandwich(["t", "h", "t"], "h"),["t", "bread", "h", "bread", "t"])
console.log(makeSandwich(["c", "l"], "c"), ["bread", "c", "bread", "l"])
console.log(makeSandwich(["h", "h"], "h"), ["bread", "h", "bread", "bread", "h", "bread"])

// made by @Joshua Señoron
