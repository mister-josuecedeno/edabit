// https://edabit.com/challenge/qEAaAxNa9v2WZMrEv

const splitString = (str, chunkSize) => {
  return Array.from({ length: Math.ceil(str.length / chunkSize) }, (_, i) =>
    str.slice(i * chunkSize, (i + 1) * chunkSize)
  );
}

const binaryText = (n) => {
  // Get binary byte
  const binaryBytes = splitString(n, 8);

  // Convert binary byte to decimal
  const decimals = binaryBytes.map(b => parseInt(b, 2));

  // Get character of ASCII code from ASCII table
  const letters = decimals.map(d => String.fromCharCode(d))

  return letters.join('');
}

// Tests

console.log(binaryText("01110100011110010111000001100101011100110110001101110010011010010111000001110100"), "typescript")
console.log(binaryText("01101110011011110110010001100101"), "node")
console.log(binaryText("0111001001100101011000010110001101110100"), "react")
console.log(binaryText("01101010011000010111011001100001"), "java")
console.log(binaryText("011010110110111101110100011011000110100101101110"), "kotlin")
console.log(binaryText("011100000111100101110100011010000110111101101110"), "python")
console.log(binaryText("01101000011000010111001101101011011001010110110001101100"), "haskell")