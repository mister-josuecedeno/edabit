// https://edabit.com/challenge/cq8taH4P7NkTm3hL2

const findLongest = (sentence) => {
  const regex = /[a-z]+/gi;
  const words = sentence.match(regex);
  const lengths = words.map((w) => w.length);
  const max = Math.max(...lengths);
  return words[lengths.indexOf(max)].toLowerCase();
};

// Tests

let [strVector, resVector] = [
  [
    'Hello darkness my old friend.',
    "Yourself is your soul's captain and fate's master.",
    "The pretty daughter's toy, a doll, is as pretty as her.",
    'A thing of beauty is a joy forever.',
    'Forgetfulness is by all means powerless!',
    'Strengths is the longest and most commonly used word that contains only a single vowel.',
  ],
  ['darkness', 'yourself', 'daughter', 'forever', 'forgetfulness', 'strengths'],
];
for (let i in strVector) console.log(findLongest(strVector[i]), resVector[i]);
