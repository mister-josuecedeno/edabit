const months = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'H',
  7: 'L',
  8: 'M',
  9: 'P',
  10: 'R',
  11: 'S',
  12: 'T',
};

const genderCode = (gender, dob) => {
  const [day, month, year] = dob.split('/');
  if (gender === 'M') {
    return +day < 10 ? '0' + day : day;
  } else {
    return +day + 40;
  }
};

const monthCode = (dob) => {
  const [day, month, year] = dob.split('/');
  return months[month];
};

const yearCode = (dob) => {
  return dob.slice(-2);
};

const surnameCode = (name) => {
  let vowels = name.match(/[aeiou]/gi);
  let consonants = name.match(/[^aeiou]/gi);
  let result;

  if (consonants.length > 2) {
    result = consonants;
  } else if ([...consonants, ...vowels].length < 3) {
    result = [
      ...consonants,
      ...vowels,
      'X'.repeat(3 - [...consonants, ...vowels].length),
    ];
  } else if (consonants.length < 3) {
    result = [...consonants, ...vowels];
  }

  return result.slice(0, 3).join('').toUpperCase();
};

const nameCode = (name) => {
  let vowels = name.match(/[aeiou]/gi);
  let consonants = name.match(/[^aeiou]/gi);
  let result = [];

  if (consonants.length === 3) {
    result = consonants;
  } else if (consonants.length > 3) {
    result = [consonants[0], consonants[2], consonants[3]];
  } else if ([...consonants, ...vowels].length < 3) {
    result = [
      ...consonants,
      ...vowels,
      'X'.repeat(3 - [...consonants, ...vowels].length),
    ];
  } else if (consonants.length < 3) {
    result = [...consonants, ...vowels];
  }

  return result.slice(0, 3).join('').toUpperCase();
};

const fiscalCode = (person) => {
  const { name, surname, gender, dob } = person;
  return (
    surnameCode(surname) +
    nameCode(name) +
    yearCode(dob) +
    monthCode(dob) +
    genderCode(gender, dob)
  );
};

// Tests
console.log(
  fiscalCode({
    name: 'Brendan',
    surname: 'Eich',
    gender: 'M',
    dob: '1/12/1961',
  }),
  'CHEBND61T01'
);
console.log(
  fiscalCode({ name: 'Helen', surname: 'Yu', gender: 'F', dob: '1/12/1950' }),
  'YUXHLN50T41'
);
console.log(
  fiscalCode({ name: 'Al', surname: 'Capone', gender: 'M', dob: '17/1/1899' }),
  'CPNLAX99A17'
);
console.log(
  fiscalCode({
    name: 'Mickey',
    surname: 'Mouse',
    gender: 'M',
    dob: '16/1/1928',
  }),
  'MSOMKY28A16'
);
console.log(
  fiscalCode({
    name: 'Marie',
    surname: 'Curie',
    gender: 'F',
    dob: '7/11/1867',
  }),
  'CRUMRA67S47'
);
