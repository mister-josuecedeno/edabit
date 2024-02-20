// https://edabit.com/challenge/WQjRP8ZpmSWZddoMd

const switcheroo = (txt) => {
  return;
};

// Tests

console.log(
  switcheroo('While he rants, I fall into a trance...'),
  'While he rance, I fall into a trants...'
);
console.log(
  switcheroo('The elephants in France were chased by ants!'),
  'The elephance in Frants were chased by ance!'
);
console.log(switcheroo('Bounced over the fence!'), 'Bounced over the fents!');
console.log(switcheroo('Face'), 'Face', 'Replace nce, not just ce');
console.log(switcheroo('Fats'), 'Fats', 'Replace nts, not just ts');
console.log(switcheroo(''), '');
