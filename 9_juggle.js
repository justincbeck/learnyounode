var http = require('http');
var urls = [];
var responses = new Object();

var callback = function(response) {
	var dataString = '';

	response.on('data', function(data) {
		dataString = dataString + data;
	});

	response.on('end', function() {
		var url = 'fuck if i know';
	
		responses[url] = dataString;

		for (var index in urls)
		{
			var url = urls[index];

			if (responses[url] == null || responses[url] == '')
			{
				break;
			}

			console.log(responses[url]);
			urls.shift();
		}
	});

	response.on('error', function(err) {
		return console.error(err);
	});
}

for (var i = 2; i < process.argv.length; i++)
{
	var url = process.argv[i];
	urls.push(url);
	http.get(url, callback);
}