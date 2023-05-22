// https://edabit.com/challenge/AK85Q669ArEKstGjT

const youtubeId = (link) => {
  return;
};

// Tests

console.log(
  youtubeId('https://www.youtube.com/watch?v=XPEr1cArWRg'),
  'XPEr1cArWRg'
);
console.log(
  youtubeId('http://www.youtube.com/watch?v=-SNQGyVW_YI&t=8871'),
  '-SNQGyVW_YI'
);
console.log(
  youtubeId('https://youtube.com/watch?t=4m40s&v=vxP3bY-XxY4'),
  'vxP3bY-XxY4'
);
console.log(
  youtubeId(
    'www.youtube.com/watch?list=PL3QZUm48uWnsdFakp3A2fI-NzmfH1jyQe&v=yv56ncTdTmU&index=8'
  ),
  'yv56ncTdTmU'
);
console.log(youtubeId('https://youtu.be/BCDEDi5gDPo'), 'BCDEDi5gDPo');
console.log(
  youtubeId(
    'https://www.youtube.com/watch?feature=youtu.be&v=jOxnoDi9IYg&t=3311s'
  ),
  'jOxnoDi9IYg'
);
console.log(
  youtubeId('https://www.youtube-nocookie.com/embed/2w9SQjdn9U4'),
  '2w9SQjdn9U4'
);
