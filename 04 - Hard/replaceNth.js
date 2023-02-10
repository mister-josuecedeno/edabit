// https://edabit.com/challenge/FSJcckvq4rry72xCw

const replaceNth = (str, nth, oldChar, newChar) => {
  return;
};

// Tests

console.log(
  replaceNth(
    'Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.',
    3,
    'e',
    '_'
  ),
  'Sometimes it is b_tter to just walk away from things and go back to them lat_r when you’re in a b_tter frame of mind.'
);
console.log(
  replaceNth(
    'The clock within this blog and the clock on my laptop are 1 hour different from each other.',
    1,
    'o',
    '@'
  ),
  'The cl@ck within this bl@g and the cl@ck @n my lapt@p are 1 h@ur different fr@m each @ther.'
);
console.log(
  replaceNth(
    'Lets all be unique together until we realise we are all the same.',
    4,
    'l',
    '#'
  ),
  'Lets all be unique together until we rea#ise we are all the same.'
);
console.log(
  replaceNth(
    'Sometimes, all you NEED to do is completely make an ass of yourself and laugh it off to realise that LIFE isn’t so bad AFTER all.',
    2,
    'E',
    'x'
  ),
  'Sometimes, all you NExD to do is completely make an ass of yourself and laugh it off to realise that LIFE isn’t so bad AFTxR all.',
  'Tests are case sensative.'
);
console.log(replaceNth('Is it free?', 100, 'e', 'Y'), 'Is it free?');
console.log(
  replaceNth('A glittering gem is not enough.', 0, 'o', '-'),
  'A glittering gem is not enough.'
);
console.log(
  replaceNth('Please wait outside of the house.', -3, 's', 's'),
  'Please wait outside of the house.'
);
console.log(
  replaceNth('Joe made the sugar cookies; Susan decorated them.', 5, 'e', '*'),
  'Joe made the sugar cookies; Susan d*corated them.'
);
console.log(
  replaceNth(
    'Writing a list of random sentences is harder than I initially thought it would be.',
    2,
    'i',
    '3'
  ),
  'Writ3ng a list of random sentences 3s harder than I in3tially thought 3t would be.'
);
console.log(
  replaceNth('The book is in front of the table.', 3, 'f', 'K'),
  'The book is in front of the table.'
);
