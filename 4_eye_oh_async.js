var fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, function done(err, result) {
	console.log(result.toString().split('\n').length - 1);
});