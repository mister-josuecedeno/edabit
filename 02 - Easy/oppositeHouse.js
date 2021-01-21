const oppositeHouse = (house, n) => {
  return n * 2 + 1 - house;
};

// Tests
console.log(oppositeHouse(1, 3), 6);
console.log(oppositeHouse(3, 3), 4);
console.log(oppositeHouse(2, 3), 5);
console.log(oppositeHouse(3, 5), 8);
console.log(oppositeHouse(7, 11), 16);
console.log(oppositeHouse(10, 22), 35);
console.log(oppositeHouse(20, 3400), 6781);
console.log(oppositeHouse(9, 26), 44);
console.log(oppositeHouse(20, 10), 1);
console.log(oppositeHouse(23633656673, 310027696726), 596421736780);
