// https://edabit.com/challenge/2FF7RKw9RLwc3EBY9

class Challenge {
  // Build class Challenge: constructor + getter
}

class User {
  // Build class User: constructor + setter
}

// 1. Declare the class instances (two users and six challenges)
// 2. Set the challenges solved by the users

// Tests

// Test user1
console.log(user1.name, 'Madam');
console.log(user1.xp, 165);
Test.assertSimilar(user1.log, [1, 4, 6]);
// Test user2
console.log(user2.name, 'Steve');
console.log(user2.xp, 110);
Test.assertSimilar(user2.log, [5, 3, 2]);
// Test challenges
console.log(challenge1.id, 1);
console.log(challenge2.level, 'EA');
console.log(challenge3.points, 20);
console.log(challenge4.id, 4);
console.log(challenge5.level, 'VH');
console.log(challenge6.points, 120);
// Trivial tests
console.log(user1.xp > user2.xp, true);
console.log(challenge6.points < challenge1.points, false);
