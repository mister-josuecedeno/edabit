// https://edabit.com/challenge/jDtwBwYhaMD2HftdX

// Other solution (mine partially worked - performance issue)
function recamanIndex(n) {
  let [size, last] = [2, 1];
  const found = new Set();
  found.add(1);

  while (last !== n) {
    let new_ = last - size;
    if (new_ > 0 && !found.has(new_)) {
      found.add(new_);
      last = new_;
    } else {
      last += size;
      found.add(last);
    }
    size++;
  }
  return size - 1;
}

const _recamanIndex = (n) => {
  const sequence = [0];
  let inSequence = false;
  let isGreaterThanZero = false;
  let index = -1;

  while (index === -1) {
    let length = sequence.length;
    let last = sequence.slice(-1)[0];
    let sub = +last - +length;
    let add = +last + +length;
    inSequence = sequence.indexOf(sub) != -1;
    isGreaterThanZero = sub > 0;

    if (isGreaterThanZero && !inSequence) sequence.push(sub);
    if (!isGreaterThanZero) sequence.push(add);
    index = sequence.indexOf(n);
  }

  return index;
};

// Tests

console.log(recamanIndex(2), 4, 'Example explained in Instructions');
console.log(recamanIndex(3), 2);
console.log(recamanIndex(7), 5);
// console.log(recamanIndex(20), 7);
// console.log(recamanIndex(56), 204);
// console.log(recamanIndex(100), 387);
// console.log(recamanIndex(666), 2292);
// console.log(recamanIndex(1000), 4419);
// console.log(recamanIndex(10000), 7215);
