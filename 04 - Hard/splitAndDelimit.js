// https://edabit.com/challenge/D7wauJQRRCnCqroEZ

const splitAndDelimit = (str, num, del) => {
  const pattern = `.{1,${num}}`;
  const regex = new RegExp(pattern, 'g');
  return str.match(regex).join(del);
};

// Tests

console.log(splitAndDelimit('bellow', 2, '&'), 'be&ll&ow');
console.log(splitAndDelimit('magnify', 3, ':'), 'mag:nif:y');
console.log(splitAndDelimit('poisonous', 2, '~'), 'po~is~on~ou~s');
console.log(splitAndDelimit('shape-shifting', 5, '^'), 'shape^-shif^ting');
console.log(splitAndDelimit('nebulous', 1, '#'), 'n#e#b#u#l#o#u#s');
