// https://edabit.com/challenge/4dKfy68gbxjms7fXA

const letsMeet = (distance, va, vb) => {
  const time = distance / (va + vb);
  const hours = Math.floor(time);
  const minutes = Math.floor((time % 1) * 60);
  const seconds = Math.floor((((time % 1) * 60) % 1) * 60);
  return `${hours}h ${minutes}min ${seconds}s`;
};

// Tests

console.log(letsMeet(100, 10, 30), '2h 30min 0s');
console.log(letsMeet(33, 15, 20), '0h 56min 34s');
console.log(letsMeet(250, 60, 80), '1h 47min 8s');
console.log(letsMeet(125, 55, 40), '1h 18min 56s');
console.log(letsMeet(0.6, 10, 15), '0h 1min 26s');
console.log(letsMeet(0.8, 23, 18), '0h 1min 10s');
console.log(letsMeet(0.72, 8, 12), '0h 2min 9s');
console.log(letsMeet(33, 15, 20), '0h 56min 34s');
console.log(letsMeet(360, 80, 64), '2h 30min 0s');
console.log(letsMeet(10, 45, 42), '0h 6min 53s');
console.log(letsMeet(90, 75, 65), '0h 38min 34s');
console.log(letsMeet(280, 70, 80), '1h 52min 0s');
