// https://edabit.com/challenge/JnbkJAxA3woPFHYMm

const howUnlucky = (y) => {
  let count = 0;
  let date = new Date();

  for (let m = 0; m < 12; m++) {
    date = new Date(y, m, 13);
    if(date.getDay() === 5) count++;    
  }
  
  return count;
};

// Tests

console.log(howUnlucky(2000), 1);
console.log(howUnlucky(2001), 2);
console.log(howUnlucky(2002), 2);
console.log(howUnlucky(2003), 1);
console.log(howUnlucky(2004), 2);
console.log(howUnlucky(2005), 1);
console.log(howUnlucky(2006), 2);
console.log(howUnlucky(2007), 2);
console.log(howUnlucky(2008), 1);
console.log(howUnlucky(2009), 3);
console.log(howUnlucky(2010), 1);
console.log(howUnlucky(2011), 1);
console.log(howUnlucky(2012), 3);
console.log(howUnlucky(2013), 2);
console.log(howUnlucky(2014), 1);
console.log(howUnlucky(2015), 3);
console.log(howUnlucky(2016), 1);
console.log(howUnlucky(2017), 2);
console.log(howUnlucky(2018), 2);
console.log(howUnlucky(2019), 2);
console.log(howUnlucky(2020), 2);
console.log(howUnlucky(2021), 1);
console.log(howUnlucky(2022), 1);
console.log(howUnlucky(2023), 2);
console.log(howUnlucky(2024), 2);
console.log(howUnlucky(2025), 1);
console.log(howUnlucky(2026), 3);
console.log(howUnlucky(2027), 1);
console.log(howUnlucky(2028), 1);
console.log(howUnlucky(2029), 2);
console.log(howUnlucky(2030), 2);
console.log(howUnlucky(2031), 1);
console.log(howUnlucky(2032), 2);
console.log(howUnlucky(2033), 1);
console.log(howUnlucky(2034), 2);
console.log(howUnlucky(2035), 2);
console.log(howUnlucky(2036), 1);
console.log(howUnlucky(2037), 3);
console.log(howUnlucky(2038), 1);
console.log(howUnlucky(2039), 1);
console.log(howUnlucky(2040), 3);
console.log(howUnlucky(2041), 2);
console.log(howUnlucky(2042), 1);
console.log(howUnlucky(2043), 3);
console.log(howUnlucky(2044), 1);
console.log(howUnlucky(2045), 2);
console.log(howUnlucky(2046), 2);
console.log(howUnlucky(2047), 2);
console.log(howUnlucky(2048), 2);
console.log(howUnlucky(2049), 1);
console.log(howUnlucky(2050), 1);
