// Set-up
const tidyLink = (url, name, hoverText) => {
  return;
};

// Tests

console.log(
  tidyLink(
    'https://edabit.com/challenges',
    'Challenges',
    'Go to the challenges!'
  ),
  '[Challenges](https://edabit.com/challenges "Go to the challenges!")'
);
console.log(
  tidyLink('https://www.google.com', 'Google', 'Google Search'),
  '[Google](https://www.google.com "Google Search")'
);
console.log(
  tidyLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Click Me!'),
  '[Click Me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)'
);
console.log(
  tidyLink(
    'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet',
    'Markdown Cheatsheet'
  ),
  '[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)'
);
console.log(
  tidyLink('https://www.python.org/', 'Python', 'Visit the Python Website!'),
  '[Python](https://www.python.org/ "Visit the Python Website!")'
);
console.log(
  tidyLink(
    'https://www.youtube.com/watch?v=O2yPnnDfqpw',
    'i just did a bad thing'
  ),
  '[i just did a bad thing](https://www.youtube.com/watch?v=O2yPnnDfqpw)'
);
console.log(
  tidyLink('https://www.reddit.com/', 'Reddit', 'the front page of reddit'),
  '[Reddit](https://www.reddit.com/ "the front page of reddit")'
);
