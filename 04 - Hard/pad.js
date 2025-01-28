// https://edabit.com/challenge/gA9dCGTc6bf2fZzE8

const pad = (message) => {
  if (message.length === 140) return message;
  const gap = 140 - message.length;

  let result = '';
  let lol = '';

  if (message.length % 2 === 0) {
    lol = 'lol'.repeat((gap + 1) / 3);
    result = message + ' ' + lol;
  } else {
    lol = 'lol'.repeat(gap / 3);
    result = message + lol;
  }

  return result.length;;
}

// Tests

console.log(pad("Even"), "Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
console.log(pad("Odd"), "Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
console.log(pad("I love the new challenge"), "I love the new challenge lololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
console.log(pad("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere."), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere.")