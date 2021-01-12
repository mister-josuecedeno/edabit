const likeOrDislike = (arr = []) => {
  let current = 'Nothing';

  for (let i = 0; i < arr.length; i++) {
    if (current === 'Nothing') {
      current = arr[i];
    } else if (arr[i] === arr[i - 1]) {
      current = 'Nothing';
    } else if (arr[i] !== arr[i - 1]) {
      current = arr[i];
    }
  }

  return current;
};

// Tests
console.log(likeOrDislike(['Dislike']), 'Dislike');
console.log(likeOrDislike(['Like', 'Like']), 'Nothing');
console.log(likeOrDislike(['Dislike', 'Dislike']), 'Nothing');
console.log(likeOrDislike(['Like', 'Like', 'Like']), 'Like');
console.log(likeOrDislike(['Like', 'Dislike']), 'Dislike');
console.log(likeOrDislike(['Dislike', 'Like']), 'Like');
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike']), 'Nothing');
console.log(likeOrDislike(['Dislike', 'Like', 'Dislike']), 'Dislike');
console.log(likeOrDislike([]), 'Nothing');
console.log(
  likeOrDislike([
    'Like',
    'Like',
    'Dislike',
    'Like',
    'Like',
    'Like',
    'Like',
    'Dislike',
  ]),
  'Dislike'
);
console.log(
  likeOrDislike([
    'Like',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Like',
    'Like',
  ]),
  'Like'
);
console.log(
  likeOrDislike([
    'Like',
    'Like',
    'Dislike',
    'Like',
    'Like',
    'Like',
    'Like',
    'Dislike',
    'Dislike',
    'Like',
    'Like',
    'Like',
    'Like',
    'Dislike',
    'Dislike',
    'Like',
    'Like',
    'Like',
    'Dislike',
    'Dislike',
  ]),
  'Nothing'
);
console.log(
  likeOrDislike([
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
    'Like',
    'Dislike',
  ]),
  'Dislike'
);
