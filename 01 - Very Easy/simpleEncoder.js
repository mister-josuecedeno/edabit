const simpleEncoder = (str) => {
  let character, first, last;
  let lower = str.toLowerCase();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    character = lower[i];
    first = lower.indexOf(character);
    last = lower.lastIndexOf(character);

    result += first === last ? '[' : ']';
  }

  return result;
};

// Tests
console.log(simpleEncoder('Mubashir'), '[[[[[[[[');
console.log(simpleEncoder('Matt'), '[[]]');
console.log(simpleEncoder('Mu ba sh ir Ha ss an'), '[[][]]]]][[]]]]]]]][');
console.log(simpleEncoder('HelEn'), '[][][');
console.log(simpleEncoder('Air  force'), '[[]]][[][[');
console.log(simpleEncoder('Pakistan'), '[][[[[][');
console.log(simpleEncoder('eD  aBiT'), '[[]][[[[');
console.log(simpleEncoder('Success'), '][]][]]');
console.log(simpleEncoder('iiiiii'), ']]]]]]');
