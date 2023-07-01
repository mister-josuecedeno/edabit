// https://edabit.com/challenge/ZYJNYe2tKhG2kb7Sh

// Needs be refactored
const possiblyPerfect = (key, answers) => {
    return key.every((s,i,a) => s == '_' || s == answers[i]);
}

// Tests

console.log(possiblyPerfect(['A', '_', 'C', '_', 'B'], ['A', 'D', 'C', 'E', 'B']), true)
console.log(possiblyPerfect(['B', '_', 'B'], ['B', 'D', 'C']), false)
console.log(possiblyPerfect(['T', '_', 'F', 'F', 'F'], ['F', 'F', 'T', 'T', 'T']), true)

console.log(possiblyPerfect(['B', 'A', '_', '_'], ['B', 'A', 'C', 'C']), true)
console.log(possiblyPerfect(['A', 'B', 'A', '_'], ['B', 'A', 'C', 'C']), true)
console.log(possiblyPerfect(['A', 'B', 'C', '_'], ['B', 'A', 'C', 'C']), false)

