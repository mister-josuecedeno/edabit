// https://edabit.com/challenge/4rEcJErhoTRbNRnKH

const pigLatin = (str) => {
  const regex = /\b\w+\b/g;
  const words = str.match(regex);
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const convert = words.map(word => {
    const firstLetter = word[0].toLowerCase();

    if (vowels.includes(firstLetter)) {
      return word + 'way';
    } else {
      return word.slice(1) + firstLetter + 'ay';
    }
  }).join(' ');

  return convert[0].toUpperCase() + convert.slice(1) + str.slice(-1);
}

// Tests

console.log(pigLatin("Cats are great pets."), "Atscay areway reatgay etspay.")
console.log(pigLatin("Tom got a small piece of pie."), "Omtay otgay away mallsay iecepay ofway iepay.")
console.log(pigLatin("He told us a very exciting tale."), "Ehay oldtay usway away eryvay excitingway aletay.")
console.log(pigLatin("A diamond is not enough."), "Away iamondday isway otnay enoughway.")
console.log(pigLatin("Hurry!"), "Urryhay!")