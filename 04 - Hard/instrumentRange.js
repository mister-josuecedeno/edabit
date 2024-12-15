function instrumentRange(instrument, note) {
  // Define the ranges for each instrument
  const ranges = {
    "Piccolo": ["D4", "C7"],
    "Tuba": ["D1", "F4"],
    "Guitar": ["E3", "E6"],
    "Piano": ["A0", "C8"],
    "Violin": ["G3", "A7"]
  };

  // Function to convert a note to a comparable value
  function noteToValue(note) {
    const noteMap = { 'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6 };
    const letter = note[0];
    const octave = parseInt(note.slice(1), 10);
    return octave * 7 + noteMap[letter];
  }

  // Get the range for the instrument
  if (!ranges[instrument]) {
    return false; // Invalid instrument
  }

  const [lower, upper] = ranges[instrument];

  // Convert notes to comparable values
  const noteValue = noteToValue(note);
  const lowerValue = noteToValue(lower);
  const upperValue = noteToValue(upper);

  // Check if the note is within range
  return lowerValue <= noteValue && noteValue <= upperValue;
}

// Examples
console.log(instrumentRange("Piccolo", "A3")); // False
console.log(instrumentRange("Violin", "G6"));  // True
console.log(instrumentRange("Piano", "C8"));   // True
