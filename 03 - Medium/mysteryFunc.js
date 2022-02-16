const mysteryFunc = (str) => {
  return str
    .match(/[A-Z][0-9]/g)
    .map((l) => l[0].repeat(l[1]))
    .join('');
};

// Tests

console.log(mysteryFunc('A4B5C2'), 'AAAABBBBBCC');
console.log(mysteryFunc('C2F1E5'), 'CCFEEEEE');
console.log(mysteryFunc('T4S2V2'), 'TTTTSSVV');
console.log(mysteryFunc('A1B2C3D4'), 'ABBCCCDDDD');
