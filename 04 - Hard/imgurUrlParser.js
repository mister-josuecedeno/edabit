// https://edabit.com/challenge/iEDvqagg62roh5q3K

const imgurUrlParser = (url) => {
  return;
};

// Tests

const results = {
  album: { id: 'cjh4E', type: 'album' },
  gallery: { id: '59npG', type: 'gallery' },
  directImage: { id: 'altd8Ld', type: 'image' },
  image: { id: 'OzZUNMM', type: 'image' },
};

// Base tests
console.log(
  imgurUrlParser('http://imgur.com/a/cjh4E'),
  results.album,
  'Should work with an album'
);
console.log(
  imgurUrlParser('http://imgur.com/gallery/59npG'),
  results.gallery,
  'Should work with a gallery'
);
console.log(
  imgurUrlParser('http://imgur.com/OzZUNMM'),
  results.image,
  'Should work with a single image'
);
console.log(
  imgurUrlParser('http://i.imgur.com/altd8Ld.png'),
  results.directImage,
  'Should work with a single image (direct link)'
);

// Additional tests
console.log(
  imgurUrlParser('http://imgur.com/a/cjh4E/zip'),
  results.album,
  "Should work with /zip at the end (Yeah it's a real thing!)"
);
console.log(
  imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF'),
  results.gallery,
  'Should work with a #hash at the end'
);
console.log(
  imgurUrlParser('www.i.imgur.com/altd8Ld.png'),
  results.directImage,
  'Should work with www. instead of http://'
);
console.log(
  imgurUrlParser('i.imgur.com/altd8Ld.png'),
  results.directImage,
  'Should work without http:// and www.'
);
