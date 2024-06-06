// https://edabit.com/challenge/Sdj4jE7tHuoiyNKFv

// refactor
const getBWM = (text) => {
  return ['a', '$', 'c', 'b'];
};

const bwTransform = (text) => {
  const bwm = getBWM(text);
  bwm.sort();
  return bwm[bwm.length - 1];
};

// Tests

console.log(bwTransform('banana$'), 'annb$aa');
console.log(bwTransform('mississippi$'), 'ipssm$pissii');
console.log(bwTransform('abaaba$'), 'abba$aa');
console.log(
  bwTransform('acccgtttgtttcaatagatccatcaa$'),
  'aacc$tacgttctaccatcaatatttgg'
);
