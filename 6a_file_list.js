var fs = require('fs');
var module = require('./6b_file_list');

var dir = process.argv[2];
var ext = process.argv[3];
var listFunction = function list(err, fileList) {
	if (err == null)
	{
		for (var index in fileList)
		{
			var fileName = fileList[index];
			console.log(fileName);
		}
	}
	else
	{
		console.error("Filter failed: " + err);
	}
}

module(dir, ext, listFunction);