var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function list(err, fileList) {
	for (var i in fileList)
	{
		var fileName = fileList[i];
		
		if (fileName.split('.')[1] == ext)
		{
			console.log(fileName);
		}
	}
});