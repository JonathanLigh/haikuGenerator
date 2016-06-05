var haiku = require('./haiku');
var format = [haikuLine(5), haikuLine(7), haikuLine(5)];

function haikuLine(syllables){
	var syllablesLeft = syllables;
	var line = [];
	for(var i = 0; i < syllables; i += randomWord){
		var randomWord = Math.floor(Math.random() * syllablesLeft) + 1;
		line.push(randomWord);
		syllablesLeft -= randomWord;
	}
	return line;
}

console.log(haiku.createHaiku(format));