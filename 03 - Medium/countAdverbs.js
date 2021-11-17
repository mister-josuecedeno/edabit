const countAdverbs = (sentence) => {
  return (sentence.match(/\w+ly\W/gi) || []).length;
}

// Tests

console.log(countAdverbs("She ran hurriedly towards the stadium."), 1)
console.log(countAdverbs("She ate the lasagna heartily and noisily."), 2)
console.log(countAdverbs("He hates potatoes."), 0)
console.log(countAdverbs("He was happily, crazily, foolishly over the moon."), 3)
console.log(countAdverbs("She writes poetry beautifully."), 1)
console.log(countAdverbs("There are many fat geese in the park."), 0)
console.log(countAdverbs("The horse acted aggressively and stubbornly."), 2)
console.log(countAdverbs("She forgot where to buy the lysol."), 0, '-ly should not be counted if it is not at the end.')
console.log(countAdverbs("Ilya ran to the store."), 0, '-ly should not be counted if it is not at the end.')
