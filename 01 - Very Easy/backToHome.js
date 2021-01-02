const backToHome = (directions) => {
  const dirMap = {};

  for (let dir of directions) {
    dirMap[dir] = dirMap[dir] + 1 || 1;
  }

  const { N, S, E, W } = dirMap;
  return N === S && E === W;
};

// Tests
console.log(backToHome('NNNN'), false);
console.log(backToHome('NENESSWW'), true);
console.log(backToHome('NEESSW'), false);
console.log(backToHome('EEWE'), false);
console.log(backToHome('NNSSEEEWWWEW'), true);
