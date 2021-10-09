const capLast = (txt) => {
  return txt.split(' ')
            .map(w => `${w.slice(0,-1)}${w.slice(-1).toUpperCase()}`)
            .join(' ');
}

// Tests

console.log(capLast("hello"), "hellO")
console.log(capLast("My Name Is Edabit"),"MY NamE IS EdabiT")
console.log(capLast("HELp THe LASt LETTERs CAPITALISe"), "HELP THE LAST LETTERS CAPITALISE")
console.log(capLast("hellooooo"), "hellooooO")
console.log(capLast("hahA I aM alreadY capitaliseD"), "hahA I aM alreadY capitaliseD")
