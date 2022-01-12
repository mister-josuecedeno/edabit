const countNumber = (arr) => {
  return arr.flat(Infinity).filter(n => !isNaN(n) && n !== '').length;
}

// Tests

console.log(countNumber([["", 17.2,5,"edabit"]]),2)
console.log(countNumber([[[[[2,14,"nepal"]]], 2,3,4]]),5)
console.log(countNumber([0, [12,"biratnagar",[[2]]]]),3)
console.log(countNumber([["balkot"]]),0)
console.log(countNumber([1,2,3,4,5,6]),6)
