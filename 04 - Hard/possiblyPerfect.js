// https://edabit.com/challenge/ZYJNYe2tKhG2kb7Sh

const possiblyPerfect = (key, answers) => {
    const correct = key.every((s,i,a) => s == '_' || s == answers[i]);
    const incorrect = key.every((s,i,a) => s == '_' || s != answers[i]);
    return correct || incorrect;
}

// Tests

console.log(possiblyPerfect(['A', '_', 'C', '_', 'B'], ['A', 'D', 'C', 'E', 'B']), true)
console.log(possiblyPerfect(['B', '_', 'B'], ['B', 'D', 'C']), false)
console.log(possiblyPerfect(['T', '_', 'F', 'F', 'F'], ['F', 'F', 'T', 'T', 'T']), true)

console.log(possiblyPerfect(['B', 'A', '_', '_'], ['B', 'A', 'C', 'C']), true)
console.log(possiblyPerfect(['A', 'B', 'A', '_'], ['B', 'A', 'C', 'C']), true)
console.log(possiblyPerfect(['A', 'B', 'C', '_'], ['B', 'A', 'C', 'C']), false)

