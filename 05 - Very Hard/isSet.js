const isSet = (cards) => {
  const colors = {};
  const numbers = {};
  const shades = {};
  const shapes = {};

  for (let {
      color,
      number,
      shade,
      shape
    } of cards) {
    colors[color] = colors[color] + 1 || 1;
    numbers[number] = numbers[number] + 1 || 1;
    shades[shade] = shades[shade] + 1 || 1;
    shapes[shape] = shapes[shape] + 1 || 1;
  }

  const results = [Object.values(colors), Object.values(numbers), Object.values(shades), Object.values(shapes)]
  return !results.flat().includes(2);
}

// Tests

console.log(isSet(
  [{
      color: "red",
      number: 1,
      shade: "lined",
      shape: "squiggle"
    },
    {
      color: "red",
      number: 1,
      shade: "lined",
      shape: "diamond"
    },
    {
      color: "red",
      number: 1,
      shade: "lined",
      shape: "squiggle"
    }
  ]
), false)

console.log(isSet(
  [{
      color: "red",
      number: 1,
      shade: "lined",
      shape: "squiggle"
    },
    {
      color: "red",
      number: 1,
      shade: "lined",
      shape: "diamond"
    },
    {
      color: "red",
      number: 1,
      shade: "lined",
      shape: "oval"
    }
  ]
), true)

console.log(isSet(
  [{
      color: "red",
      number: 1,
      shade: "empty",
      shape: "squiggle"
    },
    {
      color: "red",
      number: 1,
      shade: "lined",
      shape: "diamond"
    },
    {
      color: "red",
      number: 1,
      shade: "lined",
      shape: "oval"
    }
  ]
), false)

console.log(isSet(
  [{
      color: "red",
      number: 1,
      shade: "empty",
      shape: "squiggle"
    },
    {
      color: "red",
      number: 2,
      shade: "lined",
      shape: "diamond"
    },
    {
      color: "red",
      number: 3,
      shade: "full",
      shape: "oval"
    }
  ]
), true)

console.log(isSet(
  [{
      color: "green",
      number: 1,
      shade: "empty",
      shape: "squiggle"
    },
    {
      color: "green",
      number: 2,
      shade: "empty",
      shape: "diamond"
    },
    {
      color: "green",
      number: 3,
      shade: "empty",
      shape: "oval"
    }
  ]
), true)

console.log(isSet(
  [{
      color: "purple",
      number: 1,
      shade: "full",
      shape: "oval"
    },
    {
      color: "green",
      number: 1,
      shade: "full",
      shape: "oval"
    },
    {
      color: "red",
      number: 1,
      shade: "full",
      shape: "oval"
    }
  ]
), true)

console.log(isSet(
  [{
      color: "purple",
      number: 3,
      shade: "full",
      shape: "oval"
    },
    {
      color: "green",
      number: 1,
      shade: "full",
      shape: "oval"
    },
    {
      color: "red",
      number: 3,
      shade: "full",
      shape: "oval"
    }
  ]
), false)

console.log(isSet(
  [{
      color: "red",
      number: 1,
      shade: "empty",
      shape: "squiggle"
    },
    {
      color: "red",
      number: 2,
      shade: "lined",
      shape: "diamond"
    },
    {
      color: "purple",
      number: 3,
      shade: "full",
      shape: "oval"
    }
  ]
), false)