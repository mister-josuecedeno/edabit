// https://edabit.com/challenge/gA9dCGTc6bf2fZzE8

const pad = (message) => {
  if (message.length === 140) return message;

  if (message.length % 2 === 0) message += ' ';

  const gap = 140 - message.length;
  const repeat = gap / 2;
  const lol = 'lo'.repeat(repeat);
  const result = message + lol + 'l';

  return result;
}

// Tests

console.log(pad("Even"), "Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
console.log(pad("Odd"), "Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
console.log(pad("I love the new challenge"), "I love the new challenge lololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
console.log(pad("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere."), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere.")