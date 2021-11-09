const findCadence = (chords) => {
  const [c1,c2] = chords.slice(-2).map(c => c.toLowerCase()); 

  if(c1 == 'v' && c2 == 'i') return 'perfect';
  if(c1 == 'iv' && c2 == 'i') return 'plagal';
  if(c1 == 'v' && c2 !== 'i') return 'interrupted';
  if(c2 == 'v') return 'imperfect';

  return "no cadence";
}


// Tests

console.log(findCadence(["I", "IV", "V"]), "imperfect")
console.log(findCadence(["ii", "V", "I"]), "perfect")
console.log(findCadence(["I", "IV", "I", "V", "vi"]), "interrupted")
console.log(findCadence(["I", "IV", "I", "V", "IV"]), "interrupted")
console.log(findCadence(["I", "III", "IV", "V"]), "imperfect")
console.log(findCadence(["I", "IV", "I"]), "plagal")
console.log(findCadence(["V", "IV", "I"]), "plagal")
console.log(findCadence(["V", "IV", "V", "I"]), "perfect")
console.log(findCadence(["V", "IV", "V", "I", "vi"]), "no cadence")
console.log(findCadence(["V", "IV", "V", "III", "vi"]), "no cadence")
