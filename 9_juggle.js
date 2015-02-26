var http = require('http');
var urlsArray = [];
var dataHash = {};

var that = this;

var callback = function(response) {
	var requestURL = url;
	var dataString = '';

	response.on('data', function(data) {
		dataString = dataString + data;
	});

	response.on('end', function() {
		dataHash[requestURL] = dataString;

		for (var i = 0; i < urlsArray.length; i++)
		{
			var arrayURL = urlsArray[i];

			if (dataHash[arrayURL] === null)
			{
				break;
			}

			console.log(dataHash[arrayURL]);
			urlsArray.shift();
		}
	});

	response.on('error', function(err) {
		return console.error(err);
	});
}

for (var i = 2; i < process.argv.length; i++)
{
	var url = process.argv[i];
	urlsArray.push(url);

	http.get(url, callback);
}