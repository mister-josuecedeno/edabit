// https://edabit.com/challenge/gmpe3wEi64PmrwFMK

// Refactor

const separateLetterGroups = (word) => {
  return word.match(/(.)\1*/g) || [];
}

const isStretched = (s1, s2) => {
  const letterGroups = separateLetterGroups(s1);
  const size = letterGroups[0].length;
  const stretched = [...s2].map(l => l.repeat(size)).join('');
  return s1 === stretched;
}

// Tests

console.log(isStretched("pppaaannndddaaa", "panda"), true)
console.log(isStretched("hheelllloo", "hello"), true)
console.log(isStretched("magnet", "magnet"), true)
console.log(isStretched("eeeeemmmmmoooootttttiiiiiooooonnnnn", "emotion"), true)
console.log(isStretched("sssshhiipp", "ship"), false)
console.log(isStretched("cccaaannnddooorrr", "candor"), false)
console.log(isStretched("relationshiipp", "relationship"), false)
console.log(isStretched("magneto", "magnet"), false)
console.log(isStretched("maggnet", "magnet"), false)