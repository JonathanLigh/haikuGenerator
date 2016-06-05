var fs = require("fs");
var cmudict = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}

//I made this function b/c my laptop does not have as big of a screen as I'm used to
//and I dont like my code going offscreen
function checkForEnd(element){ 
	if((element.match(/\{/) === null) && (element.match(/[(]/) === null)){
		return true;
	}
}

function formatData(data){
	var lines = data.toString().split("\n"),
			array = [],
		lineSplit
		for (var i = 0; i < 16; i++){
			array.push([]);
		}

	lines.forEach(function(line){
		lineSplit = line.split("  ");
		stressCount = 0;
		if(lineSplit[1] != undefined && checkForEnd(lineSplit[0])){
			stress = lineSplit[1].split(' ');
			stressCount = (line.match(/\d/g) || []).length;
			array[stressCount].push(lineSplit[0]);
		}
	});
	return array;
}

function createHaiku(format){
	var words = formatData(cmudict);
	var haiku = '';
	var numLines = 0;
	while (numLines < 3){
		var line = '';
		for (var i = 0; i < format[numLines].length; i++){
			var numSyllables = format[numLines][i];
			line += words[numSyllables][Math.floor(Math.random() * words[numSyllables].length)] + ' ';
		}
		haiku += line + '\n';
		numLines++;
	}
	return haiku;
}



module.exports = {
	createHaiku : createHaiku,
};