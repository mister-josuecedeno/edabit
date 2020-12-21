const digitalCipher = (str, key) => {
  key = key.toString();
  let keyIndex = -1;
  let cd, ky;

  const result = [];

  // number to select from the key
  const getKeyIndex = () => {
    if (keyIndex >= key.length - 1) {
      keyIndex = 0;
    } else {
      keyIndex++;
    }

    return keyIndex;
  };

  // unique number assigned to letter
  const code = (chr) => {
    return chr.charCodeAt() - 96;
  };

  for (let c of str) {
    cd = code(c);
    ky = key[getKeyIndex()];

    result.push(cd + +ky);
  }

  return result;
};

// Tests
console.log(digitalCipher('scout', 1939), [20, 12, 18, 30, 21]);
console.log(digitalCipher('masterpiece', 1939), [
  14,
  10,
  22,
  29,
  6,
  27,
  19,
  18,
  6,
  12,
  8,
]);
console.log(digitalCipher('nomoretears', 12), [
  15,
  17,
  14,
  17,
  19,
  7,
  21,
  7,
  2,
  20,
  20,
]);
console.log(digitalCipher('mubashir', 1990), [14, 30, 11, 1, 20, 17, 18, 18]);
console.log(digitalCipher('pakistan', 1947), [17, 10, 15, 16, 20, 29, 5, 21]);
console.log(digitalCipher('pakistanairforce', 1965), [
  17,
  10,
  17,
  14,
  20,
  29,
  7,
  19,
  2,
  18,
  24,
  11,
  16,
  27,
  9,
  10,
]);
console.log(digitalCipher('edabit', 100), [6, 4, 1, 3, 9, 20]);
