var http = require('http');
var bl = require('bl');

var dataString = '';

var callback = function(response) {
	response.pipe(bl(function(err, data) {
		if (err)
		{
			return console.error(err);
		}

		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
}

http.get(process.argv[2], callback);
