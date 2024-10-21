// https://edabit.com/challenge/rnRot4rRofudkE72s

/* Mubashir needs your help to identify the spread of a deadly virus. He can provide you with the following parameters:

A two-dimensional array persons, containing affected persons 'V' and unaffected persons 'P'.
Number of hours n, each infected person is spreading the virus to one person up, down, left and right each hour.
Your function should return the updated array containing affected and unaffected persons after n hours.
 */

const deadlyVirus = (persons, n) => {
  const rows = persons.length;
  const cols = persons[0].length;
  const directions = [
    [-1, 0],  // up
    [1, 0],   // down
    [0, -1],  // left
    [0, 1]    // right
  ];

  // Queue to store positions of infected persons
  let queue = [];

  // Collect all initial infected positions
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (persons[i][j] === 'V') {
        queue.push([i, j]);
      }
    }
  }

  // Perform BFS to spread the virus for n hours
  while (n > 0 && queue.length > 0) {
    const newQueue = [];

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      
      // Spread the virus to the 4 adjacent cells
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        // Check if the new position is within bounds and is unaffected
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && persons[newX][newY] === 'P') {
          persons[newX][newY] = 'V';  // Spread the virus
          newQueue.push([newX, newY]); // Add the newly infected person to the queue
        }
      }
    }

    // Move to the next hour with the new infected persons
    queue = newQueue;
    n--;
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
  
