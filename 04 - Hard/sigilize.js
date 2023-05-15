// https://edabit.com/challenge/kqup45hRWqWQ7LqDm

const sigilize = (desire) => {
  let letters = desire.replace(/[aeiou\s]/gi, '').toUpperCase();
  let result = '';

  for (let i = 0; i < letters.length; i++) {
    if (i === letters.lastIndexOf(letters[i])) {
      result += letters[i];
    }
  }

  return result;
};

// Tests

console.log(sigilize('I HAVE WONDERFUL FRIENDS WHO LOVE ME'), 'FRNDSWHLVM');
console.log(sigilize('My business is financially successful'), 'MBNYCSFL');
console.log(sigilize('I have a job I enjoy and it pays well'), 'HVBJNDTPYSWL');
console.log(
  sigilize('I heard the song closing time playing on the radio'),
  'CSMPLYGNTHRD'
);
console.log(sigilize('i am healthy'), 'MLTHY');
console.log(sigilize('I FOUND MY SOULMATE'), 'FNDYSLMT');
