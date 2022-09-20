// https://edabit.com/challenge/4qimb3QisL8wNbSCd
// Not my answer

const fretFreq = (gStr, fret) => {
  const obj = {
    1: 329.63,
    2: 246.94,
    3: 196,
    4: 146.83,
    5: 110,
    6: 82.41,
  };
  return +(obj[gStr] * 2 ** (fret / 12)).toFixed(2);
};

// Tests

console.log(fretFreq(3, 21), 659.26);
console.log(fretFreq(3, 15), 466.17);
console.log(fretFreq(6, 17), 220.01);
console.log(fretFreq(5, 12), 220);
console.log(fretFreq(2, 5), 329.63);
console.log(fretFreq(3, 9), 329.63);
console.log(fretFreq(1, 16), 830.62);
console.log(fretFreq(1, 4), 415.31);
console.log(fretFreq(3, 16), 493.89);
console.log(fretFreq(4, 6), 207.65);
console.log(fretFreq(2, 13), 523.25);
console.log(fretFreq(6, 12), 164.82);
console.log(fretFreq(5, 16), 277.18);
console.log(fretFreq(5, 19), 329.63);
console.log(fretFreq(4, 0), 146.83);
console.log(fretFreq(2, 6), 349.23);
console.log(fretFreq(3, 9), 329.63);
console.log(fretFreq(3, 5), 261.63);
console.log(fretFreq(5, 18), 311.13);
console.log(fretFreq(2, 23), 932.32);
console.log(fretFreq(2, 16), 622.25);
console.log(fretFreq(4, 6), 207.65);
console.log(fretFreq(4, 9), 246.94);
console.log(fretFreq(5, 8), 174.61);
console.log(fretFreq(3, 1), 207.65);
console.log(fretFreq(5, 17), 293.66);
console.log(fretFreq(6, 18), 233.09);
console.log(fretFreq(3, 23), 740);
console.log(fretFreq(6, 14), 185);
console.log(fretFreq(1, 2), 370);
