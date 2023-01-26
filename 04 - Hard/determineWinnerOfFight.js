// https://edabit.com/challenge/Zou4ggX2D9w39wJrG

const determineWinnerOfFight = (obj) => {
  let me = 0;
  let spouse = 0;

  Object.entries(obj).forEach((r) => {
    if (r[1].me > r[1].spouse) me++;
    if (r[1].me < r[1].spouse) spouse++;
  });

  if (me > spouse) return 'ME!';
  if (me < spouse) return 'SPOUSE!';
  if (me === spouse) return 'NOBODY!';
};

// Tests

const obj = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 9,
  },
  round3: {
    me: 20,
    spouse: 20,
  },
};

const obj2 = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 14,
  },
  round3: {
    me: 10,
    spouse: 55,
  },
};

const obj3 = {
  round1: {
    me: 10,
    spouse: 9,
  },
  round2: {
    me: 11,
    spouse: 12,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
};

console.log(determineWinnerOfFight(obj), 'ME!');
console.log(determineWinnerOfFight(obj2), 'SPOUSE!');
console.log(determineWinnerOfFight(obj3), 'NOBODY!');
