const findCadence = (chords) => {
  return;
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
