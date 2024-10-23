// https://edabit.com/challenge/rnRot4rRofudkE72s

/* Mubashir needs your help to identify the spread of a deadly virus. He can provide you with the following parameters:

A two-dimensional array persons, containing affected persons 'V' and unaffected persons 'P'.
Number of hours n, each infected person is spreading the virus to one person up, down, left and right each hour.
Your function should return the updated array containing affected and unaffected persons after n hours.
 */

const deadlyVirus = (persons, n) => {
  const rows = persons.length, cols = persons[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let queue = [];

  // Initialize the queue with the positions of all infected persons
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (persons[i][j] === 'V') queue.push([i, j]);
    }
  }

  // Spread the virus for n hours
  while (n-- > 0 && queue.length) {
    let newQueue = [];
    for (const [x, y] of queue) {
      for (const [dx, dy] of directions) {
        const newX = x + dx, newY = y + dy;
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && persons[newX][newY] === 'P') {
          persons[newX][newY] = 'V';
          newQueue.push([newX, newY]);
        }
      }
    }
    queue = newQueue; // Move to the next set of infected persons
  }

  return persons;
};

// Tests

var persons=[
  ["P","P","P","P","P"],
  ["V","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ],n=0,
  answer=[
  ["P","P","P","P","P"],
  ["V","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ]
  
  console.log(deadlyVirus(persons, n), answer)
  
  persons=[
  ["P","P","P","P","P"],
  ["V","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ],n=1,
  answer=[
  ["V","P","P","P","P"],
  ["V","V","P","P","P"],
  ["V","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ]
  
  console.log(deadlyVirus(persons, n), answer)
  
  persons=[
  ["P","P","P","P","P"],
  ["V","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ],n=2,
  answer=[
  ["V","V","P","P","P"],
  ["V","V","V","P","P"],
  ["V","V","P","P","P"],
  ["V","P","P","P","P"],
  ["P","P","P","P","P"]
  ]
  
  console.log(deadlyVirus(persons, n), answer)
  
  persons=[
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","V","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ],n=1,
  answer=[
  ["P","P","P","P","P"],
  ["P","P","V","P","P"],
  ["P","V","V","V","P"],
  ["P","P","V","P","P"],
  ["P","P","P","P","P"]
  ]
  
  console.log(deadlyVirus(persons, n), answer)
  
  persons=[
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","V","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ],n=2,
  answer=[
  ["P","P","V","P","P"],
  ["P","V","V","V","P"],
  ["V","V","V","V","V"],
  ["P","V","V","V","P"],
  ["P","P","V","P","P"]
  ]
  
  console.log(deadlyVirus(persons, n), answer)
  
  persons=[
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","V","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ],n=3,
  answer=[
  ["P","V","V","V","P"],
  ["V","V","V","V","V"],
  ["V","V","V","V","V"],
  ["V","V","V","V","V"],
  ["P","V","V","V","P"]
  ]
  
  console.log(deadlyVirus(persons, n), answer)
  
  persons=[
  ["P","P","P","P","P"],
  ["P","P","P","P","P"],
  ["P","P","V","P","P"],
  ["P","P","P","P","P"],
  ["P","P","P","P","P"]
  ],n=4,
  answer=[
  ["V","V","V","V","V"],
  ["V","V","V","V","V"],
  ["V","V","V","V","V"],
  ["V","V","V","V","V"],
  ["V","V","V","V","V"]
  ]
  
  console.log(deadlyVirus(persons, n), answer)
  
