const wormLength = (worm) => {
  const regex = /\-/g;
  const length = (worm.match(regex) || []).length;  
  return (length == worm.length && length !== 0) ? `${length * 10} mm.` : 'invalid';
}

// Tests

console.log(wormLength("----------"), "100 mm.")
console.log(wormLength(""), "invalid")
console.log(wormLength("---_-___---_"), "invalid")
console.log(wormLength("------"), "60 mm.")
console.log(wormLength("iwheguawhpvpaiehpiuwwega"), "invalid")
console.log(wormLength("QWERTYUIOPASDFGHJKL"), "invalid")
console.log(wormLength("------------"), "120 mm.")