// You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.

// Create a function that takes a two-dimensional array where:

// Free carparking spaces are represented by a 0
// Staircases are represented by a 1
// Your starting position is represented by a 2 and can be at any level of the car park.
// Exit is always at the bottom right of the ground floor.
// You must use the staircases (1) to go down a level.
// Each floor will have only one staircase apart from the ground floor which will not have any staircases.
// ... and returns an array of the quickest route out of the carpark.

// 2 = starting position
// 1 = stairs
// exit = far right of last array

const parkingExit = (levels) => {
  let floor = 0;
  let lastFloor = false;
  let result = [];
  let down = 1;

  const getDir = (start, end) => {
    let dir = start < end ? 'R' : start > end ? 'L' : 'D';
    return dir;
  };

  const getSteps = (start, end) => {
    let steps = start === end ? 1 : Math.abs(start - end);
    return steps;
  };

  while (!lastFloor) {
    // Where am I?
    let currentFloor = levels[floor];
    lastFloor = currentFloor.indexOf(1) === -1;

    // Check start and end
    let end = lastFloor ? levels[0].length - 1 : currentFloor.indexOf(1);

    let start = currentFloor.includes(2)
      ? currentFloor.indexOf(2)
      : levels[floor - 1].indexOf(1);

    // Find the stairs and change level
    if (start !== end) {
      result.push(getDir(start, end) + getSteps(start, end));
      !lastFloor && result.push('D' + down);
    } else if (!lastFloor && start === end) {
      result[result.length - 1] = 'D' + ++down;
    }

    floor++;
  }

  return result;
};

// Tests
console.log(
  parkingExit([
    [1, 0, 0, 0, 2],
    [0, 0, 0, 0, 0],
  ]),
  ['L4', 'D1', 'R4']
);
console.log(
  parkingExit([
    [2, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ]),
  ['R3', 'D2', 'R1']
);
console.log(
  parkingExit([
    [0, 2, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ]),
  ['R3', 'D3']
);
console.log(
  parkingExit([
    [1, 0, 0, 0, 2],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
  ['L4', 'D1', 'R4', 'D1', 'L4', 'D1', 'R4']
);
console.log(parkingExit([[0, 0, 0, 0, 2]]), []);
