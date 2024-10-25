// https://edabit.com/challenge/pS3FkeSKxZe3AaWMG

const finalDirection = (initial, turns) => { return; }

// Tests

Test.assertEquals(finalDirection('N', ['L', 'L', 'L']), 'E')
Test.assertEquals(finalDirection('N', ['R', 'R', 'R', 'R', 'R', 'R', 'R']), 'W')
Test.assertEquals(finalDirection('N', ['R', 'R', 'R', 'L']), 'S')
Test.assertEquals(finalDirection('N', ['R', 'R', 'R', 'R']), 'N')
Test.assertEquals(finalDirection('N', ['R', 'L']), 'N')
Test.assertEquals(finalDirection('S', ['R', 'L', 'R', 'L', 'R']), 'W')
Test.assertEquals(finalDirection('S', ['R', 'L', 'R', 'L', 'R', 'L']), 'S')