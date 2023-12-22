// https://edabit.com/challenge/CHnhjwomyvwnEp7Sd

// Not my answer
function XORCipher(msg1, msg2) {
  // Determine the minimum length between the two strings
  let min_length = Math.min(msg1.length, msg2.length);

  // Truncate both strings to the minimum length
  msg1 = msg1.substring(0, min_length);
  msg2 = msg2.substring(0, min_length);

  let encodedMessage = '';

  // Iterate over each character
  for (let i = 0; i < min_length; i++) {
    // Convert characters to their hexadecimal values, perform XOR,
    // and convert the result back to a hexadecimal string
    let xorValue = (parseInt(msg1[i], 16) ^ parseInt(msg2[i], 16)).toString(16);
    encodedMessage += xorValue;
  }

  return encodedMessage;
}

// Tests

console.log(XORCipher('11', '22'), '33');
console.log(XORCipher('1020304', '403201'), '501231');
console.log(
  XORCipher(
    '1c0111001f010100061a024b53535009181c',
    '686974207468652062756c6c277320657965'
  ),
  '746865206b696420646f6e277420706c6179'
);
console.log(XORCipher('aadf', 'bce2'), '163d');
