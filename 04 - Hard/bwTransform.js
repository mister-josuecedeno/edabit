// https://edabit.com/challenge/Sdj4jE7tHuoiyNKFv

const getBWM = (text) => {
  const bwm = [];
  let chars = [...text];

  for (let i = 0; i < text.length; i++) {
    let first = chars.shift();
    chars = [...chars, ...first];
    let rotation = [...chars].join('');
    bwm.push(rotation);
  }

  return bwm;
};

const bwTransform = (text) => {
  const bwm = getBWM(text);
  bwm.sort();
  const last = bwm.map((l) => l[l.length - 1]);
  return last.join('');
};

// Tests

console.log(bwTransform('banana$'), 'annb$aa');
console.log(bwTransform('mississippi$'), 'ipssm$pissii');
console.log(bwTransform('abaaba$'), 'abba$aa');
console.log(
  bwTransform('acccgtttgtttcaatagatccatcaa$'),
  'aacc$tacgttctaccatcaatatttgg'
);
