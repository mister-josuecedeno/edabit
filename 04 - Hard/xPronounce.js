const xPronounce = (sentence) => {
  sentence = sentence.split(' ');

  // Just x
  sentence = sentence.map((w) => (w === 'x' ? 'ecks' : w));

  // Starts with x
  sentence = sentence.map((w) => (w[0] === 'x' ? `z${w.slice(1)}` : w));

  // All remaining x
  return sentence.join(' ').replace(/x/gi, 'cks');
};

// Tests

console.log(
  xPronounce('Inside the box was a xylophone'),
  'Inside the bocks was a zylophone'
);
console.log(
  xPronounce('The x ray is excellent'),
  'The ecks ray is eckscellent'
);
console.log(
  xPronounce('OMG x box unboxing video x D'),
  'OMG ecks bocks unbocksing video ecks D'
);
console.log(
  xPronounce('I gotta make bux but the clox are ticking!'),
  'I gotta make bucks but the clocks are ticking!'
);
console.log(
  xPronounce('this test does not have an x in it'),
  'this test does not have an ecks in it'
);
console.log(xPronounce('Max bax pax'), 'Macks backs packs');
console.log(xPronounce('Anti vax'), 'Anti vacks');
console.log(
  xPronounce('Who is xavier and why does he have my car'),
  'Who is zavier and why does he have my car'
);
console.log(
  xPronounce('OMG xylem unboxing video x D'),
  'OMG zylem unbocksing video ecks D'
);
