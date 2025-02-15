// https://edabit.com/challenge/fKGMjfjibMM7AxtpZ

const getToday = (hhmm) => {
  const [hours, minutes] = hhmm.split(':');
  const today = new Date();
  today.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
  return today;
}

const getTimeToSleep = (arr) => {
  const [alarm, duration] = arr;
  const today = getToday(alarm);

  const [hours, minutes] = duration.split(':');
  today.setHours(today.getHours() - parseInt(hours, 10), today.getMinutes() - parseInt(minutes, 10));
  return today.toTimeString().slice(0, 5);
}

const bedTime = (...args) => {
  return Array.from(args, getTimeToSleep);
}

// Tests

console.log(bedTime(['07:50', '07:50']), ['00:00'])
console.log(bedTime(['06:15', '10:00'], ['08:00', '10:00'], ['09:30', '10:00']), ['20:15', '22:00', '23:30'])
console.log(bedTime(['05:45', '04:00'], ['07:10', '04:30']), ['01:45', '02:40'])

