// https://edabit.com/challenge/SvodRRbyv7g3LxZsK

const determineWhoCursedTheMost = (obj) => {
  let mPoints = 0;
  let sPoints = 0;

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const round = obj[`round${i + 1}`];
    mPoints += round['me'];
    sPoints += round['spouse'];
  }

  if (mPoints === sPoints) return 'DRAW!';
  if (mPoints > sPoints) return 'ME!';
  return 'SPOUSE!';
};

// Tests

const random = 1;
const obj = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
};
const obj2 = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: random * 100,
    spouse: 4,
  },
};
const obj3 = {
  round1: {
    me: 10,
    spouse: random * 100,
  },
  round2: {
    me: 9,
    spouse: 24,
  },
};

console.log(determineWhoCursedTheMost(obj), 'DRAW!');
console.log(determineWhoCursedTheMost(obj2), 'ME!');
console.log(determineWhoCursedTheMost(obj3), 'SPOUSE!');
