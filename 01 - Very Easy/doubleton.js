const doubleton = (n) => {
  let isDoubleton = false;
  let numbers;
  let current;
  ++n;

  while (isDoubleton === false) {
    current = new Set([...`${n}`]);
    if (current.size === 2) {
      isDoubleton = true;
    } else {
      n++;
    }
  }

  return n;
};

// Tests
console.log(doubleton(130), 131);
console.log(doubleton(1434), 1441);
console.log(doubleton(20), 21);
console.log(doubleton(5), 10);
console.log(doubleton(131), 133);
console.log(doubleton(1000000), 1000001);
