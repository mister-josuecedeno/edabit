const chineseZodiac = (year) => {
  const zodiac = [
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Sheep',
  ];

  return zodiac[year % 12];
};

// Tests

console.log(chineseZodiac(2021), 'Ox');
console.log(chineseZodiac(2020), 'Rat');
console.log(chineseZodiac(1938), 'Tiger');
console.log(chineseZodiac(1951), 'Rabbit');
console.log(chineseZodiac(1964), 'Dragon');
console.log(chineseZodiac(1977), 'Snake');
console.log(chineseZodiac(1990), 'Horse');
console.log(chineseZodiac(2003), 'Sheep');
console.log(chineseZodiac(2016), 'Monkey');
console.log(chineseZodiac(1969), 'Rooster');
console.log(chineseZodiac(1982), 'Dog');
console.log(chineseZodiac(1995), 'Pig');
