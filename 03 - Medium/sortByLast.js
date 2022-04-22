const sortByLast = (str) => {
  return str
    .split(' ')
    .sort((a, b) => {
      let y = a.slice(-1);
      let z = b.slice(-1);

      if (y < z) return -1;
      if (y > z) return 1;

      return 0;
    })
    .join(' ');
};

// Tests

console.log(sortByLast('herb camera dynamic'), 'camera herb dynamic');
console.log(
  sortByLast('stab traction artist approach'),
  'stab approach traction artist'
);
console.log(
  sortByLast('sample partner autonomy swallow trend'),
  'trend sample partner swallow autonomy'
);
console.log(
  sortByLast('dividend platform pupil conclusion silence breakfast'),
  'dividend silence pupil platform conclusion breakfast'
);
console.log(sortByLast('harm'), 'harm');
console.log(
  sortByLast('card warrant opinion medium illustrate'),
  'card illustrate medium opinion warrant'
);
console.log(sortByLast('cause fine virtue'), 'cause fine virtue');
console.log(
  sortByLast('introduce fashionable cause sacrifice reality'),
  'introduce fashionable cause sacrifice reality'
);
console.log(
  sortByLast('brick moral institution loud talk resign worth'),
  'loud worth brick talk moral institution resign'
);
