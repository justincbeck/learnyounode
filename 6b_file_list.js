module.exports = function (dirName, ext, callback){
	var fs = require('fs');
	var filtered = [];

	fs.readdir(dirName, function list(err, fileList){
		if (err)
		{
			return callback(err);
		}

		for (var i in fileList)
		{
			var fileName = fileList[i];
			
			if (fileName.split('.')[1] == ext)
			{
				filtered.push(fileName);
			}
		}

		return callback(null, filtered);
	});
}