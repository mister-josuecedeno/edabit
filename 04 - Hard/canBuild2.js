// https://edabit.com/challenge/aKx7FLtttZqopDo5e

const canBuild = (s1, s2) => {
  // Create a map to count occurrences of each character in s2
  const charCount = new Map();

  for (const char of s2) {
    if (char !== ' ') {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  }

  // Check if we can build s1 using characters from s2
  for (const char of s1) {
    if (char === ' ') continue;

    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }

    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
}

// Tests

console.log(canBuild("got 2 go", "go go go 2 today"), true)
console.log(canBuild("for an angel", "angel forest nymph awaken"), true)
console.log(canBuild("sit on top", "its a moo point"), true)
console.log(canBuild("solar to oven", "love desolate rose thorn"), true)
console.log(canBuild("gate im in", "magnetizing"), true)
console.log(canBuild("moreso", "mount rushmore"), true)
console.log(canBuild("dool", "ken doll"), false)
console.log(canBuild("world of make believe", "make believe world"), false)
console.log(canBuild("long high add or", "highway road go long"), false)
console.log(canBuild("fill tuck mid", "truck falls dim"), false)
console.log(canBuild("skin man i", "man in mask"), false)
console.log(canBuild("foolish prides", "foolish pride"), false)