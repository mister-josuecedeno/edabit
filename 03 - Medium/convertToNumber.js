const convertToNumber = (obj) => {

  for (const o in obj) {
    obj[o] = +obj[o]; 
  }
  return obj;
}

// Tests

const res = convertToNumber({piano: "200", tv: "100", stereo: "400" })
const control = () => {
	let isNum = true
	for(let item in res) {
		if(typeof res[item] !== "number") return false
		if(isNaN(res[item])) return false 
	}
	return isNum
}

console.log(control(), true)
console.log(convertToNumber({piano: "200", tv: "300", stereo: "400" }), {piano: 200, tv: 300, stereo: 400})
console.log(convertToNumber({piano: "200", tv: "300" }), {piano: 200, tv: 300 })
console.log(convertToNumber({piano: "200"}), {piano: 200})
