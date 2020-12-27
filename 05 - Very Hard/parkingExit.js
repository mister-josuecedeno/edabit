// 2 = starting position
// 1 = stairs
// exit = far right of last array

const parkingExit = (levels) => {
  let floor = 0;
  let lastFloor = false;
  let down = 1;

  let currentFloor, start, end, dir, steps;
  let result = [];

  const getDir = (start, end) => {
    dir = start < end ? 'R' : start > end ? 'L' : 'D';
    return dir;
  };

  const getSteps = (start, end) => {
    steps = start === end ? 1 : Math.abs(start - end);
    return steps;
  };

  while (!lastFloor) {
    currentFloor = levels[floor];
    lastFloor = currentFloor.indexOf(1) === -1;

    start = currentFloor.includes(2) ? currentFloor.indexOf(2) : end;
    end =
      currentFloor.indexOf(1) === -1
        ? levels[0].length - 1
        : currentFloor.indexOf(1);

    result.push(getDir(start, end) + getSteps(start, end)); // find the stairs

    if (getDir(start, end) === 'D') {
      result[result.length - 1] = 'D' + down++;
    } else {
      result.push('D' + down++); // find the stairs
    }

    floor++;
  }

  return result;
};

// Tests
// console.log(
//   parkingExit([
//     [1, 0, 0, 0, 2],
//     [0, 0, 0, 0, 0],
//   ]),
//   ['L4', 'D1', 'R4']
// );
console.log(
  parkingExit([
    [2, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ]),
  ['R3', 'D2', 'R1']
);
// console.log(
//   parkingExit([
//     [0, 2, 0, 0, 1],
//     [0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0],
//   ]),
//   ['R3', 'D3']
// );
// console.log(
//   parkingExit([
//     [1, 0, 0, 0, 2],
//     [0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//   ]),
//   ['L4', 'D1', 'R4', 'D1', 'L4', 'D1', 'R4']
// );
// console.log(parkingExit([[0, 0, 0, 0, 2]]), []);
