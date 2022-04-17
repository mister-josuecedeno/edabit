const initialize = (names) => {
  return names.map((n) => {
    const [first, last] = n.split(' ');
    return `${first[0]}. ${last[0]}.`;
  });
};

// Tests
console.log(initialize(['Sherlock Holmes', 'John Watson', 'Irene Adler']), [
  'S. H.',
  'J. W.',
  'I. A.',
]);
console.log(initialize(['Harry Potter', 'Ron Weasley']), ['H. P.', 'R. W.']);
console.log(initialize(['Stephen Hawking']), ['S. H.']);
console.log(initialize(['Atticus Finch']), ['A. F.']);
console.log(initialize(['Leonardo DiCaprio']), ['L. D.']);
