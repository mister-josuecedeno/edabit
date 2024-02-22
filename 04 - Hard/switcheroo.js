// https://edabit.com/challenge/WQjRP8ZpmSWZddoMd

// Not my solution
const switcheroo = (txt) => {
  // Use a regular expression to find words ending with "nts" or "nce"
  // and replace them accordingly
  return txt.replace(/\b(\w*)(nts|nce)\b/g, function (match, p1, p2) {
    // If the ending is "nts", replace with "nce", and vice versa
    return p2 === 'nts' ? p1 + 'nce' : p1 + 'nts';
  });
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
