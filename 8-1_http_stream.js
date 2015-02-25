var http = require('http');

var dataString = '';

var callback = function(response) {
	response.setEncoding('utf8');

	response.on('data', function(data) {
		dataString = dataString + data;
	});

	response.on('end', function() {
		console.log(dataString.length);
		console.log(dataString);
	});

	response.on('error', function(err) {
		console.error(err);
	});
}

http.get(process.argv[2], callback);