// https://edabit.com/challenge/7d9iv4QuC7egSzqQG

// Not my solution

const MAYAN_CALENDAR_START = new Date(-3113, 7, 11);
const DAY_VALUES = [144000, 7200, 360, 20, 1];
const MS_IN_A_DAY = 86400000;

const getMayanDate = (date) => {
  const diff = new Date(date) - MAYAN_CALENDAR_START;
  let totalDays = diff / MS_IN_A_DAY;

  return DAY_VALUES.map((value) => {
    const result = Math.floor(totalDays / value);
    totalDays %= value;
    return result;
  }).join('.');
};
