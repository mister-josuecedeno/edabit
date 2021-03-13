const noYelling = (phrase) => {
  let ending;
  const arr = phrase.split(' ');
  const last = `${arr.splice(-1)}`;

  switch (last[last.length - 1]) {
    case '!':
      ending = last.replace(/\!+/, '!');
      break;
    case '?':
      ending = last.replace(/\?+/, '?');
      break;
    default:
      ending = last;
      break;
  }

  return [...arr, ending].join(' ');
};

// Tests

console.log(noYelling('What went wrong?????????'), 'What went wrong?');
console.log(noYelling('Oh my goodness!!!'), 'Oh my goodness!');
console.log(noYelling('WHAT!'), 'WHAT!');
console.log(noYelling('WHAT?'), 'WHAT?');
console.log(noYelling('Oh my goodness!'), 'Oh my goodness!');
console.log(
  noYelling('I just cannot believe it.'),
  'I just cannot believe it.'
);
console.log(
  noYelling('I just!!! can!!! not!!! believe!!! it!!!'),
  'I just!!! can!!! not!!! believe!!! it!'
);
console.log(
  noYelling("That's a ton!! of cheese!!!!"),
  "That's a ton!! of cheese!"
);
