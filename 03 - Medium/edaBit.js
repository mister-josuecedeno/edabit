const edaBit = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    if(i % 15 === 0){
      arr.push('EdaBit')
    } else if (i % 5 === 0) {
      arr.push('Bit');
    } else if(i % 3 === 0) {
      arr.push('Eda');
    } else {
      arr.push(i);
    }
  }
  
  return arr
}

// Tests

console.log(edaBit(1, 20), [1,2,'Eda',4,'Bit','Eda',7,8,'Eda','Bit',11,'Eda',13,14,'EdaBit',16,17,'Eda',19,'Bit'])
console.log(edaBit(-250, -230), ['Bit', 'Eda', -248, -247, 'Eda', 'Bit', -244, 'Eda', -242, -241, 'EdaBit', -239, -238, 'Eda', -236, 'Bit', 'Eda', -233, -232, 'Eda', 'Bit'])
console.log(edaBit(-10, 5), ['Bit', 'Eda', -8, -7, 'Eda', 'Bit', -4, 'Eda', -2, -1, 'EdaBit', 1, 2, 'Eda', 4, 'Bit'])
console.log(edaBit(33, 45), ['Eda', 34, 'Bit', 'Eda', 37, 38, 'Eda', 'Bit', 41, 'Eda', 43, 44, 'EdaBit'])
console.log(edaBit(50, 90), ['Bit', 'Eda', 52, 53, 'Eda', 'Bit', 56, 'Eda', 58, 59, 'EdaBit', 61, 62, 'Eda', 64, 'Bit', 'Eda', 67, 68, 'Eda', 'Bit', 71, 'Eda', 73, 74, 'EdaBit', 76, 77, 'Eda', 79, 'Bit', 'Eda', 82, 83, 'Eda', 'Bit', 86, 'Eda', 88, 89, 'EdaBit'])
