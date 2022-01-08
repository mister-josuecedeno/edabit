const remix = (str, arr) => {
  let map = [...str].map((s,i) => [s, arr[i]]);
  return map.sort((a,b) => a[1] - b[1]).map(l => l[0]).join('');
}

// Tests

console.log(remix("abcd", [0, 3, 1, 2]), "acdb");
console.log(remix("PlOt", [1, 3, 0, 2]), "OPtl");
console.log(remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]), "cmourpte");
console.log(remix("twist", [4, 0, 1, 2, 3]), "wistt");
console.log(remix("responsibility", [0, 6, 8, 11, 10, 7, 13, 5, 3, 2, 4, 12, 1, 9]), "rtibliensyopis");
console.log(remix("Interference", [6, 9, 10, 11, 7, 3, 0, 2, 5, 1, 8, 4]), "enrfeeIrcnte");
console.log(remix("sequence", [5, 7, 3, 4, 0, 1, 2, 6]), "encqusee");