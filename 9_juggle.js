var http = require('http');
var urlsArray = [];
var dataHash = {};

var that = this;

var execute = function(requestURL) {
	http.get(url, function(response) {
		var dataString = '';

		response.on('data', function(data) {
			dataString = dataString + data;
		});

		response.on('end', function() {
			dataHash[requestURL] = dataString;

			for (var i = urlsArray.length - 1; i >= 0; i--)
			{
				var arrayURL = urlsArray[i];
				var hashData = dataHash[arrayURL];

				if (hashData === undefined)
				{
					break;
				}

				console.log(dataHash[arrayURL]);
				urlsArray.splice(i, 1);
			}
		});

		response.on('error', function(err) {
			return console.error(err);
		});
	});
}

var callback = function(response) {
}

for (var i = process.argv.length - 1; i >= 2; i--)
{
	var url = process.argv[i];
	urlsArray.push(url);

	execute(url);
}