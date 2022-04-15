const toObj = (arr) => arr.map((d) => (obj = { [d]: `${d}`.charCodeAt(0) }));

// Tests

console.log(toObj(['a', 'b', 'c']), [{ a: 97 }, { b: 98 }, { c: 99 }]);
console.log(toObj(['a', 'p', 'e']), [{ a: 97 }, { p: 112 }, { e: 101 }]);
console.log(toObj(['z']), [{ z: 122 }]);
console.log(toObj(['e', 'o', 'n']), [{ e: 101 }, { o: 111 }, { n: 110 }]);
console.log(toObj([]), []);
