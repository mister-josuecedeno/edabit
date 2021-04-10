const fruitSalad = (fruits) => {
  let firstHalf;
  const chunks = [];

  for (let fruit of fruits) {
    firstHalf = fruit.length / 2;

    if (fruit.length % 2 !== 0) {
      firstHalf = Math.floor(firstHalf);
    }

    chunks.push(fruit.slice(0, firstHalf));
    chunks.push(fruit.slice(firstHalf));

  }

  return chunks.sort().join('');
}

// Tests
console.log(fruitSalad(['apple', 'pear', 'grapes']), 'apargrapepesple')
console.log(fruitSalad(['banana', 'kiwi', 'strawberry', 'blueberries']), 'anabanberryblueberrieskistrawwi')
console.log(fruitSalad(['raspberries', 'mango']), 'erriesmangoraspb')
console.log(fruitSalad(['banana']), 'anaban')