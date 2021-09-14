const mapping = (letters) => {
  const mapped = {};

  for (const letter of letters) {
    mapped[letter] = letter.toUpperCase();
  }

  return mapped;
}

// Tests
console.log(mapping(["a", "b", "c"]), { a: "A", b: "B", c: "C" })
console.log(mapping(["p", "s", "t"]), { p: "P", s: "S", t: "T" })
console.log(mapping(["a", "v", "y", "z"]), { a: "A", v: "V", y: "Y", z: "Z" })

