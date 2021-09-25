const firstBeforeSecond = (s, first, second) => {
  return s.lastIndexOf(first) < s.indexOf(second);
}

// Tests

console.log(firstBeforeSecond("a rabbit jumps joyfully", "a", "j"), true)
console.log(firstBeforeSecond("knaves knew about waterfalls", "k", "w"), true)
console.log(firstBeforeSecond("maria makes money", "m", "o"), true)
console.log(firstBeforeSecond("the hostess made pecan pie", "h", "p"), true)
console.log(firstBeforeSecond("barry the butterfly flew away", "b", "f"), true)
console.log(firstBeforeSecond("moody muggles", "m", "g"), true)
console.log(firstBeforeSecond("happy birthday", "a", "y"), false)
console.log(firstBeforeSecond("precarious kangaroos", "k", "a"), false)
console.log(firstBeforeSecond("maria makes money", "m", "i"), false)
console.log(firstBeforeSecond("taken by the beautiful sunrise", "u", "s"), false)
console.log(firstBeforeSecond("sharp cheddar biscuit", "t", "s"), false)
console.log(firstBeforeSecond("moody muggles", "m", "o"), false)
