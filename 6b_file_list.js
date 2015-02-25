module.exports = function (dirName, ext, callback) {
	var fs = require('fs');

	fs.readdir(dirName, function list(err, fileList) {
		if (err)
		{
			return callback(err);
		}

		fileList = fileList.filter(function(fileName) {
			return fileName.split('.')[1] == ext;
		});

		return callback(null, fileList);
	});
}