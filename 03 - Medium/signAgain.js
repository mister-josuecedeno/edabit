const obj = {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: ""
  },
signature: "Rocky Balboa"
}

function signAgain(obj) {
	Object.freeze(obj)
	Object.seal(obj.kitchen)
	
	// DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.signature = "Terminator"
  obj.extraProperty = "not possible"
  obj.kitchen.piano = 1000
	obj.kitchen.signature = "Rocky Balboa"
  return obj
}