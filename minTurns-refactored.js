// // https://edabit.com/challenge/sWo3y2WgtGDDtRtrB

const minTurns = (current, target) => {
  let turns = 0;

  for (let i = 0; i < current.length; i++) {
    const currentDigit = parseInt(current[i]);
    const targetDigit = parseInt(target[i]);

    const clockwiseTurns = Math.abs(targetDigit - currentDigit);
    const counterclockwiseTurns = 10 - clockwiseTurns;

    turns += Math.min(clockwiseTurns, counterclockwiseTurns);
  }

  return turns;
};
