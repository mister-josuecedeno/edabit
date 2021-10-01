String.prototype.consonants = function() {
	const regex = /[^aeiou]/gi
	return this.match(regex).length;
}

String.prototype.vowels = function() {
	const regex = /[aeiou]/gi
	return this.match(regex).length;
}