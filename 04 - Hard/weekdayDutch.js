// https://edabit.com/challenge/FaH2Zm5r9kaviiT39

const weekdayDutch = (date) => {
  const days = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
  const [day, month, year] = date.split(" ");
  const dayOfWeek = new Date(year, month - 1, day).getDay();
  return days[dayOfWeek];
}

// Tests

console.log(weekdayDutch("21 9 1970"), "maandag")
console.log(weekdayDutch("22 9 1970"), "dinsdag")
console.log(weekdayDutch("23 9 1970"), "woensdag")
console.log(weekdayDutch("24 9 1970"), "donderdag")
console.log(weekdayDutch("25 9 1970"), "vrijdag")
console.log(weekdayDutch("26 9 1970"), "zaterdag")
console.log(weekdayDutch("27 9 1970"), "zondag")
console.log(weekdayDutch("10 12 2050"), "zaterdag")
console.log(weekdayDutch("14 10 6010"), "donderdag")
console.log(weekdayDutch("31 1 1000"), "vrijdag")
console.log(weekdayDutch("8 12 2112"), "donderdag")
console.log(weekdayDutch("12 12 1212"), "woensdag")