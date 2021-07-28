const indexOfCaps = (str) => {
  // ascii between 65 and 90
  const result = [];
  let asc = 0;

  for (let i = 0; i < str.length; i++) {
    asc = str.charCodeAt(i);

    if (asc > 64 && asc < 91) {
      result.push(i);
    }
  }

  return result;
};

// Tests
console.log(indexOfCaps('eDaBiT'), [1, 3, 5]);
console.log(indexOfCaps('eQuINoX'), [1, 3, 4, 6]);
console.log(indexOfCaps('determine'), []);
console.log(indexOfCaps('STRIKE'), [0, 1, 2, 3, 4, 5]);
console.log(indexOfCaps('sUn'), [1]);
console.log(indexOfCaps('SpiDer'), [0, 3]);
console.log(indexOfCaps('accOmpAnY'), [3, 6, 8]);
console.log(indexOfCaps('@xCE#8S#i*$en'), [2, 3, 6]);
console.log(indexOfCaps('1854036297'), []);
console.log(indexOfCaps('Fo?.arg~{86tUx=|OqZ!'), [0, 12, 16, 18]);
