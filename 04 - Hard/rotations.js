function leftRotations(str) {
  const arr = [...str];
  const result = [];
  let last;

  for (let el of arr) {
    last = arr.pop();
    arr.unshift(last);
    result.unshift(arr.join(''));
  }

  return result;
}

function rightRotations(str) {
  const arr = [...str];
  const result = [];
  let first;

  for (let el of arr) {
    first = arr.shift();
    arr.push(first);
    result.unshift(arr.join(''));
  }

  return result;
}

console.log(leftRotations('abc'));
