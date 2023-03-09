// https://edabit.com/challenge/2FF7RKw9RLwc3EBY9
// Test and Refactor the results
class Challenge {
  constructor(id, level) {
    this.id = id;
    this.level = level;
  }

  points = () => {
    xp = {
      VE: 5,
      EA: 10,
      ME: 20,
      HA: 40,
      VH: 80,
      EX: 120,
    };

    return xp(this.level);
  };
}

class User {
  constructor(name, xp, log) {
    this.name = name;
    this.xp = xp;
    this.log = log;
  }

  newSolvedChallenge = (Challenge) => {
    ++Challenge.xp;
    this.log.push(Challenge.id);
  };
}

// 1. Declare the class instances (two users and six challenges)
const user1 = new User('Madam', 0, []);
const user2 = new User('Steve', 0, []);

const challenge1 = new Challenge(1, 'VE');
const challenge2 = new Challenge(2, 'EA');
const challenge3 = new Challenge(3, 'ME');
const challenge4 = new Challenge(4, 'HA');
const challenge5 = new Challenge(5, 'VH');
const challenge6 = new Challenge(6, 'EX');

// 2. Set the challenges solved by the users
user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);

user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);

// Tests

// Test user1
console.log(user1.name, 'Madam');
console.log(user1.xp, 165);
console.log(user1.log, [1, 4, 6]);
// Test user2
console.log(user2.name, 'Steve');
console.log(user2.xp, 110);
console.log(user2.log, [5, 3, 2]);
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
