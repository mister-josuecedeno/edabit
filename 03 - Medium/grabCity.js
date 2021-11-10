const grabCity = (str) => {
  const regex = /\[(.*?)\]/g
  const lastWord = str.match(regex).slice(-1);
  return lastWord;
}

// Tests

console.log(grabCity("[Last Day!] Beer Festival [Munich]"), "Munich")
console.log(grabCity("Cheese Factory Tour [Portland]"), "Portland")
console.log(grabCity("[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]"), "Prince Edward Island")
console.log(grabCity("[5 Stars] Traditional Gondola Experience [Venice]"), "Venice")
console.log(grabCity("[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]"), "Machu Picchu")
console.log(grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]"), "Kyoto")
