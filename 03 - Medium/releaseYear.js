const releaseYear = (album) => {
  const albums = {
    2015: ['Vulnicura', 'Honeymoon', 'Rebel Heart'],
    2016: ['Lemonade', 'Blackstar', 'A Moon Shaped Pool'],
    2017: ['Flower Boy', 'Antisocialites'],
    2018: ['El Mal Querer', 'Someone Out There', 'Cranberry', 'Kamikaze'],
    2019: ['thank u next', 'Magdalene', 'Ode to Joy'],
    2020: ['Rough and Rowdy Ways', 'folklore', 'Future Nostalgia', 'Colores'],
  };

  for (const year in albums) {
    if (albums.hasOwnProperty(year)) {
      if (albums[year].includes(album)) return +year;
    }
  }

  return 'Unknown';
};

// Tests

console.log(releaseYear('Rebel Heart'), 2015);
console.log(releaseYear('Someone Out There'), 2018);
console.log(releaseYear('Where Wildness Grows'), 'Unknown');
console.log(releaseYear('thank u next'), 2019);
console.log(releaseYear(2017), 'Unknown');
console.log(releaseYear('Flower Boy'), 2017);
console.log(releaseYear('Kamikaze'), 2018);
console.log(releaseYear('folklore'), 2020);
console.log(releaseYear('Opal'), 'Unknown');
