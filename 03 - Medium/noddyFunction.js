const noddyFunction = s => !/d/gi.test(s);

// Tests

console.log(noddyFunction("fantastic"), true)
console.log(noddyFunction("wonderful"), false)
console.log(noddyFunction("noddy"), false)
console.log(noddyFunction("blessed"), false)
console.log(noddyFunction("Wonder"), false)
console.log(noddyFunction("waterfall"), true)
console.log(noddyFunction("nature"), true)
console.log(noddyFunction("ADVENTUROUS"), false)
console.log(noddyFunction("Benevolent"), true)
console.log(noddyFunction("courageous"), true)
console.log(noddyFunction("End"), false)
