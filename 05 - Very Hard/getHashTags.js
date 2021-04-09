const getHashTags = (words) => {
  return words.match(/\w+/gi).sort((a, b) => b.length - a.length)
    .map(word => `#${word.toLowerCase()}`)
    .slice(0, 3)
}

// Tests
console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"), ["#avocado", "#became", "#global"])
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"), ["#christmas", "#probably", "#will"])
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"), ["#surprise", "#parents", "#fruit"])
console.log(getHashTags("Visualizing Science"), ["#visualizing", "#science"])
console.log(getHashTags("Minecraft Stars on Youtube Share Secrets to Their Fame"), ["#minecraft", "#youtube", "#secrets"])
console.log(getHashTags("Are You an Elite Entrepreneur?"), ["#entrepreneur", "#elite", "#are"])