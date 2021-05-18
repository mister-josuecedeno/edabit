const modify = (txt) => {
  // reverse
  let reverse = [...txt].reverse();
  console.log(reverse);

  // position in the alphbet
  let alphaLoc = reverse.map((ltr) => ltr.charCodeAt(0) - 96);
  console.log(alphaLoc);

  // join and convert into a number
  let num = +alphaLoc.join('');
  console.log(num);

  // convert to binary
  let bin = num.toString(2);
  console.log(bin);

  // convert back to a number
  return +bin;
};

// Tests
console.log(modify('hello'), 111001101011101101101010);
console.log(modify('mubashir'), 10110000110010000110011111000111000001);
console.log(modify('edabit'), 111111110110001110001);
console.log(modify('airforce'), 110001100001110111100011110000100011);
console.log(modify('pakistan'), 10100100011000010111100011111100111001100);
console.log(modify('hello'), 111001101011101101101010);
