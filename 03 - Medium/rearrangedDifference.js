const rearrangedDifference = (num) => {
  
  const sortNum = (n, order) => {
    let nums = [...`${n}`].map(n => +n);
    if(order === 'desc') {
      nums.sort((a,b) => b - a);
    } else  {
      nums.sort((a,b) => a - b);
    }
    return +nums.join('');
  }
  
  return sortNum(num, 'desc') - sortNum(num);
}

// Tests

console.log(rearrangedDifference(9092564), 9719721)
console.log(rearrangedDifference(1308821), 8719722)
console.log(rearrangedDifference(8386568), 5319765)
console.log(rearrangedDifference(7794084), 9429651)
console.log(rearrangedDifference(6366093), 9329661)
console.log(rearrangedDifference(7863060), 8729622)
console.log(rearrangedDifference(3368327), 6429654)
console.log(rearrangedDifference(7218787), 7599933)
console.log(rearrangedDifference(7723188), 7639533)
console.log(rearrangedDifference(8816317), 7739523)
console.log(rearrangedDifference(8824349), 7539543)
console.log(rearrangedDifference(3320707), 7709823)
console.log(rearrangedDifference(1695488), 8429652)
console.log(rearrangedDifference(2120034), 4309866)
console.log(rearrangedDifference(5300586), 8619732)
console.log(rearrangedDifference(3538814), 7519743)
console.log(rearrangedDifference(1336939), 8629632)
console.log(rearrangedDifference(6290200), 9619731)
console.log(rearrangedDifference(5268866), 6299964)
console.log(rearrangedDifference(5155458), 7099983)
