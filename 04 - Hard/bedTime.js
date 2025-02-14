// https://edabit.com/challenge/fKGMjfjibMM7AxtpZ

const getTimeToSleep = (arr) => {
  const [alarm, duration] = arr;
  return alarm;
}

const bedTime = () => {
  // refactor - write out pseudo-code
}

// Tests

console.log(bedTime(['07:50', '07:50']), ['00:00'])
console.log(bedTime(['06:15', '10:00'], ['08:00', '10:00'], ['09:30', '10:00']), ['20:15', '22:00', '23:30'])
console.log(bedTime(['05:45', '04:00'], ['07:10', '04:30']), ['01:45', '02:40'])

