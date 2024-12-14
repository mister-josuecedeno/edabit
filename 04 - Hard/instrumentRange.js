// https://edabit.com/challenge/iu5HNPnDHoLmSobyq
const instrumentRange = (instr, note) => {
  return;
}

// Tests

console.log(instrumentRange("Piccolo", "A3"), false)
console.log(instrumentRange("Violin", "G6"), true)
console.log(instrumentRange("Piano", "C8"), true)
console.log(instrumentRange("Piano", "C9"), false)
console.log(instrumentRange("Tuba", "C8"), false)
console.log(instrumentRange("Guitar", "F4"), true)
console.log(instrumentRange("Guitar", "C4"), true)
console.log(instrumentRange("Piccolo", "F4"), true)
console.log(instrumentRange("Tuba", "F6"), false)