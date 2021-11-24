const clubEntry = (word) => {
  const regex = /(.)\1/gi;
  return (word.match(regex)[0][0].charCodeAt(0) - 96) * 4;
}

// Tests

console.log(clubEntry("lettuce"), 80)
console.log(clubEntry("hill"), 48)
console.log(clubEntry("apple"), 64)
console.log(clubEntry("addiction"), 16)
console.log(clubEntry("bee"), 20)
console.log(clubEntry("zz"), 104)
console.log(clubEntry("mubashirr"), 72)
