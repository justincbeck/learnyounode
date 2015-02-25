var fs = require('fs');

var fileName = process.argv[2];

var fileString = fs.readFileSync(fileName).toString();

var lineArray = fileString.split('\n');

console.log(lineArray.length - 1);