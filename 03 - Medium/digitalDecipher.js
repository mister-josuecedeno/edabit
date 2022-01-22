const digitalDecipher = (eMessage, key) => {
  const getLetter = (n) => String.fromCharCode(n + 96);
  const keys = [...`${key}`];
  let keyIndex = 0;

  for (let i = 0; i < eMessage.length; i++) {
    keyIndex = keys[keyIndex] === undefined ? 0 : keyIndex; 
    eMessage[i] = eMessage[i] - keys[keyIndex];
    keyIndex++;   
  }
  return eMessage.map(n => getLetter(n)).join('');
};

// Tests

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939), "scout")
console.log(digitalDecipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), "masterpiece")
console.log(digitalDecipher([15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20], 12),"nomoretears" )
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990), "mubashir")
console.log(digitalDecipher([17, 10, 15, 16, 20, 29, 5, 21], 1947), "pakistan")
console.log(digitalDecipher([17,10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10], 1965), "pakistanairforce")
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100), "edabit")
