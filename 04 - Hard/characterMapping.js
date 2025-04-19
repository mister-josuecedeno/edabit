// https://edabit.com/challenge/9MEWMJ5eX8EAiWSs5

const characterMapping = (str) => { return; }

// Tests

console.log(characterMapping("abcd") == [0, 1, 2, 3])
console.log(characterMapping("abb") == [0, 1, 1])
console.log(characterMapping("babbcb") == [0, 1, 0, 0, 2, 0])
console.log(characterMapping("aaabb") == [0, 0, 0, 1, 1])
console.log(characterMapping("abccbc") == [0, 1, 2, 2, 1, 2])
console.log(characterMapping("fluffy") == [0, 1, 2, 0, 0, 3])
console.log(characterMapping("madness") == [0, 1, 2, 3, 4, 5, 5])
console.log(characterMapping("buttery") == [0, 1, 2, 2, 3, 4, 5])
console.log(characterMapping("canine") == [0, 1, 2, 3, 2, 4])
console.log(characterMapping("hohoho") == [0, 1, 0, 1, 0, 1])
console.log(characterMapping("hmmmmm") == [0, 1, 1, 1, 1, 1])
console.log(characterMapping("") == [])